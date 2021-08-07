import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import styles from "./ImageGallery.module.scss";
import { PixabayAPI } from "../../services/PixabayAPI";
// import Loader from "react-loader-spinner";
import Loading from "../Loader";
import Button from "../Button/";

class ImageGallery extends Component {
  state = {
    PixabayImage: [],
    searchQuery: "",
    page: 1,
    error: null,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    // const { searchQuery, page } = this.props;
    const { searchQuery } = this.props;

    if (prevProps.searchQuery !== searchQuery) {
      this.setState({ loading: true, PixabayImage: [] });
      try {
        const PixabayImage = await PixabayAPI(searchQuery, 1);
        this.setState({ PixabayImage: PixabayImage.hits });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  // LoadMoreButton = !(this.state.PixabayImage.lenght < 12) && this.componentDidUpdate

  render() {
    const { PixabayImage, loading } = this.state;
    const LoadMoreButton = () =>
      !(this.state.PixabayImage.length < 12) && !loading;
    return (
      <>
        {console.log(LoadMoreButton())}
        {this.state.loading && <Loading />}
        <ul className={styles.ImageGallery}>
          <ImageGalleryItem PixabayImage={PixabayImage} />
        </ul>
        {LoadMoreButton && <Button onFetch={this.componentDidUpdate} />}
      </>
    );
  }
}
export default ImageGallery;
