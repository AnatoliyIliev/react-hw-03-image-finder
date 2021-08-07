import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import styles from "./ImageGallery.module.scss";
import { PixabayAPI } from "../../services/PixabayAPI";

class ImageGallery extends Component {
  state = {
    PixabayImage: null,
    searchQuery: "",
    page: 1,
    error: null,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    // const { searchQuery, page } = this.props;
    const { searchQuery } = this.props;

    if (prevProps.searchQuery !== searchQuery) {
      console.log("this.props.searchQuery", searchQuery);
      this.setState({ loading: true });
      console.log("loadImage-APP", searchQuery);
      try {
        const PixabayImage = await PixabayAPI(searchQuery, 1);
        this.setState({ PixabayImage: PixabayImage.hits });
        // console.log(PixabayImage.hits);
        // return PixabayImage.hits;
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    return (
      <ul className={styles.ImageGallery}>
        {/* <li>{this.props.searchQuery}</li> */}
        <ImageGalleryItem
          PixabayImage={this.state.PixabayImage}
          // searchQuery={this.props.searchQuery}
        />
      </ul>
    );
  }
}
export default ImageGallery;
