// import styles from "./ImageGalleryItem.module.scss";

const ImageGalleryItem = (PixabayImage, searchQuery) => {
  console.log(PixabayImage, searchQuery);
  return (
    PixabayImage.lenght > 0 &&
    PixabayImage.map((image) =>
      console.log(image)
      // <>
      //   {PixabayImage.map((hit) => (
      //     <li className={styles.ImageGalleryItem}>
      //       <img
      //         src={hit.webformatURL}
      //         alt={searchQuery}
      //         key={hit.id}
      //         className={styles.ImageGalleryItem_image}
      //       />
      //     </li>
      //   ))}
      // </>
    )
  );
};

export default ImageGalleryItem;
