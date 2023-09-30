import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClick }) => {
  if (!Array.isArray(images)) {
    return <p>Error with Array</p>;
  }
  return (
    <ul>
      {images.map(({ id, webformatURL, tags, largeImageURL, onClick }) => {
        console.log('images: ', images);

        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};