import { Component } from "react";
import { PixabayAPI } from "./services/PixabayAPI";

class App extends Component {
  state = {
    searchQuery: "cat",
    page: 1,
    error: null,
    loading: false,
  };

  loadImage = async (searchQuery, page) => {
    console.log("loadImage", await PixabayAPI(searchQuery, page));
    // await PixabayAPI(searchQuery, page)
  };

  render() {
    const { searchQuery, page } = this.state;

    return (
      <div>
        <h1>How many people</h1>

        {this.loadImage(searchQuery, page)}
        <ul>
          <li>
            {console.log("222", this.loadImage(searchQuery, page))}
            {/* <img src={this.loadImage.hits[0].webformatURL} alt={this.loadImage.hits[0].id }/> */}
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
