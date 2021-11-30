import ImageGalleryItem from './ImageGalleryItem'
import { Component } from 'react';
import styles from '../components/ImageGallery.module.css';
import Modal from '../components/Modal';

class ImageGallery extends Component{

state={
    images: [],
    largeImageURL: '',
    tags: '',
    showModal: 'false',
};

async componentDidUpdate(prevProps, prevState) {
    //Autorization
    const API_KEY = "23474268-70d851d8204f5902d9e83a665";
    //URL and query params====================
    let searchQuery = this.props.submitValue;
    //=====================================
    const baseUrl = `https://pixabay.com/api/`;
    const params = `?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const url = baseUrl + params;
    //URL and query params END===================

    if (prevProps.submitValue !== searchQuery) {
      fetch(url)
        .then((response) => {
          return response.json();
          // console.log('response',response);
        })
        .then((results) => {
          this.setState({
            images: [...results.hits],
          });
          console.log("results", results.hits);
        });
    }
  }


  bigImageSetState = (bigImage, description) =>{
    this.setState({largeImageURL:bigImage, tags:description})
  }

toggleModal =()=>{
    this.setState(({showModal}) => ({
        showModal: !showModal,
        largeImageURL:'',
        tags:'',
    }))
}

render() {

            return ( <>
            <ul className={styles.ImageGallery}>

                {this.state.images.map(({ id, webformatURL, largeImageURL, tags }) => (
                
                    <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags = {tags}
                    onClickProps = {this.bigImageSetState}
                    />
                ))}

            </ul> { this.state.largeImageURL && 
            <Modal>
                <button type="button" className='' onClick = {this.toggleModal}>Close</button>
                <img src={this.state.largeImageURL} alt={this.state.tags} />
            </Modal>}
            </>
        )
    }
}

export default ImageGallery;