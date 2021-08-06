import { Component } from "react";
import "./App.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PixabayAPI } from "./services/PixabayAPI";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";

class App extends Component {
  state = {
    PixabayImage: null,
    searchQuery: "",
    page: 1,
    error: null,
    loading: false,
  };

  loadImage = async () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    // console.log("loadImage-APP", searchQuery);
    try {
      const PixabayImage = await PixabayAPI(searchQuery, page);
      this.setState({ PixabayImage: PixabayImage.hits });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  submitForm = (searchQuery) => {
    // console.log("searchQuery-submitForm-App", searchQuery);
    this.setState({ searchQuery });
    // this.loadImage(searchQuery);

    // console.log(this.loadImage().hits)
  };

  render() {
    // const { PixabayImage, searchQuery, page } = this.state;
    // const { PixabayImage, searchQuery } = this.state;
    const { searchQuery } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.submitForm} />
        <ImageGallery
          // loadImage={this.loadImage}
          PixabayImage={this.loadImage()}
          searchQuery={searchQuery}
        />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
