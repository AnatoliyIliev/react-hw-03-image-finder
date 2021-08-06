import { Component } from "react";
import "./App.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PixabayAPI } from "./services/PixabayAPI";
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

  loadImage = async (searchQuery) => {
    this.setState({ loading: true });
    try {
      const PixabayImage = await PixabayAPI(searchQuery, this.state.page);
      this.setState({ PixabayImage });
      console.log(this.state.PixabayImage);
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  submitForm = (searchQuery) => {
    console.log("searchQuery-submitForm-App", searchQuery);
    this.setState({ searchQuery });
    this.loadImage(searchQuery);

    // console.log(this.loadImage().hits)
  };

  render() {
    const { PixabayImage, searchQuery, page } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.submitForm} />
        <ImageGallery
          searchQuery={searchQuery}
          page={page}
          PixabayImage={PixabayImage}
        />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
