import { Component } from "react";
import "./App.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { PixabayAPI } from "./services/PixabayAPI";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";

class App extends Component {
  state = {
    searchQuery: "",
  };

  submitForm = (searchQuery) => {
    this.setState({ searchQuery });
    // this.loadImage(searchQuery);
  };

  render() {
    // const { PixabayImage, searchQuery, page } = this.state;
    // const { PixabayImage, searchQuery } = this.state;
    const { searchQuery } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.submitForm} />
        <ImageGallery searchQuery={searchQuery} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
