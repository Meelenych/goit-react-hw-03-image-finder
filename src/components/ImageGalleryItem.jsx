import styles from '../components/ImageGalleryItem.module.css';

function ImageGalleryItem ({webformatURL, largeImageURL, tags}) {
    return (            
        <li className={styles.ImageGalleryItem}>
            <img className={styles.ImageGalleryItemImage} src={webformatURL} alt={tags} srcSet = {largeImageURL}/>
        </li>
    )
}

export default ImageGalleryItem;