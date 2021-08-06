import ImageGalleryItem from "../ImageGalleryItem";
import styles from "./ImageGallery.module.scss";

const ImageGallery = ({ PixabayImage, searchQuery }) => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem PixabayImage={PixabayImage} searchQuery={searchQuery} />
    </ul>
  );
};
export default ImageGallery;
