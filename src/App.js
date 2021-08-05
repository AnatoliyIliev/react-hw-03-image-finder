import { Component } from "react";
import "./App.module.scss";
import { PixabayAPI } from "./services/PixabayAPI";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";

class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    error: null,
    loading: false,
  };

  loadImage = async (searchQuery) => {
    // console.log('loadImage', searchQuery);
    return await PixabayAPI(searchQuery, this.state.page);
  };

  submitForm = (searchQuery) => {
    // console.log('searchQuery-submitForm-tralll', searchQuery);
    this.setState({ searchQuery });
    this.loadImage(searchQuery);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.submitForm} />
        <ImageGallery
        // loadImage={}
        />
      </div>
    );
  }
}

export default App;
