import styles from "./ImageGalleryItem.module.scss";

const ImageGalleryItem = ({ PixabayImage }) => {
  return (
    <>
      {PixabayImage.map((hit) => (
        <li className={styles.ImageGalleryItem} key={hit.id}>
          <img
            src={hit.webformatURL}
            alt={hit.user}
            className={styles.ImageGalleryItem_image}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
