import { Component } from "react";
import "./App.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PixabayAPI } from "./services/PixabayAPI";
import Button from "./Components/Button";
import Loading from "./Components/Loader";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";

class App extends Component {
  state = {
    PixabayImage: [],
    searchQuery: "",
    page: 1,
    error: null,
    loading: false,
  };

  submitForm = (searchQuery) => {
    this.setState({ searchQuery });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.setState({ loading: true, PixabayImage: [], page: 1 });
      try {
        const PixabayImage = await PixabayAPI(searchQuery, prevState.page);
        this.setState({ PixabayImage: PixabayImage.hits });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  fetchUpdate = async () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    try {
      const PixabayImage = await PixabayAPI(searchQuery, page);
      this.setState({ PixabayImage: PixabayImage.hits });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
    console.log(page);
  };

  render() {
    const { PixabayImage, loading, error } = this.state;
    const LoadMoreButton = () => !(PixabayImage.length < 12) && !loading;

    return (
      <div>
        <Searchbar onSubmit={this.submitForm} />
        {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
        {loading && <Loading />}
        <ImageGallery
          // searchQuery={searchQuery}
          PixabayImage={PixabayImage}
        />
        <ToastContainer autoClose={3000} />
        {LoadMoreButton && <Button onFetch={this.fetchUpdate} />}
      </div>
    );
  }
}

export default App;
