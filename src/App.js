import { Component } from "react";
import "./App.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PixabayAPI } from "./services/PixabayAPI";
import Button from "./Components/Button";
import Loading from "./Components/Loader";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import Modal from "./Components/Modal";

class App extends Component {
  state = {
    PixabayImage: [],
    searchQuery: "",
    page: 1,
    error: null,
    loading: false,
    showModal: false,
    activeId: null,
    alt: "",
    largeImageURL: "",
  };

  submitForm = (searchQuery) => {
    this.setState({ searchQuery, page: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.setState({ loading: true, PixabayImage: [] });
      this.fetchUpdate();
    }
  }

  fetchUpdate = async () => {
    const { searchQuery, page } = this.state;
    const options = { searchQuery, page };

    this.setState({ loading: true });
    try {
      const PixabayImageHins = await PixabayAPI(options);

      this.setState((prevState) => ({
        PixabayImage: [...prevState.PixabayImage, ...PixabayImageHins.hits],
        page: prevState.page + 1,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  isOpenModal = (event) => {
    console.log(event);
    // console.log(event.target);
    // console.log(event.target.alt);
    // console.log(this.state.PixabayImage);
    // console.log(event.target.attributes.attributes);
    // const { alt } = event.target;
    // const activeId = event.target.id;
    // console.log(event.target.nodeName)
    // const { url } = event.target.dataset;
    // console.log(url);

    // this.state.PixabayImage.filter(({id,  attributes }) => {
    //   if (id === event.target.id) {
    //     return this.setState({
    //       activeId: event.target.id,
    //       alt: alt,
    //       largeImageURL: attributes,
    //     })
    //   }
    // })

    // this.toggleModal();
  };

  render() {
    // console.log(this.state.activeId);
    // console.log(this.state.alt);
    // console.log(this.state.largeImageURL);
    const { PixabayImage, loading, error, showModal, largeImageURL, alt } =
      this.state;
    const LoadMoreButton = !(PixabayImage.length < 12) && !loading;

    return (
      <div>
        <Searchbar onSubmit={this.submitForm} />
        {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
        {loading && <Loading />}
        <ImageGallery PixabayImage={PixabayImage} onClick={this.isOpenModal} />
        <ToastContainer autoClose={3000} />
        {LoadMoreButton && <Button onFetch={this.fetchUpdate} />}
        {showModal && (
          <Modal onClose={this.toggleModal} onClick={this.isOpenModal}>
            <img src={largeImageURL} alt={alt} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
