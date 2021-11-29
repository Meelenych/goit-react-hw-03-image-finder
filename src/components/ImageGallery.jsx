import ImageGalleryItem from './ImageGalleryItem'
import styles from '../components/ImageGallery.module.css';

function ImageGallery ({images}) {

        return (
            <ul className={styles.ImageGallery}>

                {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                
                    <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags = {tags}
                    />
                ))}

            </ul>
        )
}

export default ImageGallery;