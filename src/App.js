import { Component } from "react";
import "./App.module.scss";
import { PixabayAPI } from "./services/PixabayAPI";
import Searchbar from "./Components/Searchbar";

class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    error: null,
    loading: false,
  };

  loadImage = async (searchQuery, page) => {
    console.log("loadImage", await PixabayAPI(searchQuery, page));
    // await PixabayAPI(searchQuery, page)
  };

  submitForm = (searchQuery) => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div>
        {/* {this.loadImage(searchQuery, page)} */}
        <Searchbar onSubmit={this.submitForm} />
      </div>
    );
  }
}

export default App;
