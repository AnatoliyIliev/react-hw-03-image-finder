import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import styles from "./ImageGallery.module.scss";
class ImageGallery extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    const { PixabayImage } = this.props;
    return (
      <>
        <ul className={styles.ImageGallery}>
          <ImageGalleryItem PixabayImage={PixabayImage} />
        </ul>
      </>
    );
  }
}
export default ImageGallery;
