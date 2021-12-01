import ImageGalleryItem from './ImageGalleryItem'
import { Component } from 'react';
import styles from '../components/ImageGallery.module.css';
import Modal from '../components/Modal';
import Button from '../components/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ImageGallery extends Component{

state={
    images: [],
    largeImageURL: '',
    tags: '',
    showModal: false,
    page : 1,
    loading: false,
};

async componentDidUpdate(prevProps, prevState) {
    this.setState({loading: true});

    const API_KEY = "23474268-70d851d8204f5902d9e83a665";
    let searchQuery = this.props.submitValue;
    const baseUrl = `https://pixabay.com/api/`;
    const params = `?q=${searchQuery}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const url = baseUrl + params;
    
    if (prevProps.submitValue !== searchQuery) {
      fetch(url)
        .then((response) => {
            console.log('response',response);
            
          return response.json();
        })
        .then((results) => {
          this.setState({
              images: [...results.hits],
            });
            if(results.hits.length !== 0){toast('Search successfull!')}
            else if (results.hits.length === 0){toast ('Sorry, nothing found!')}
            // else if (results.hits.length === 0){this.setState({loading: false})}
            //   console.log("results", results.hits);
        })
        .finally(()=> this.setState({loading: false}))
    }
  }

  loadMore = () =>{       
    this.setState(prevState => {
        console.log('loadmore clicked');
        return { page: prevState.page + 1 }
      })
    }

  bigImageSetState = (bigImage, description) =>{
    this.setState({largeImageURL:bigImage, tags:description})
  }

closeModal =()=>{
    this.setState(({showModal}) => ({
        showModal: !showModal,
        largeImageURL:'',
        tags:'',
    }))
}

render() {

            return ( <>
            <ul className={styles.ImageGallery}>
                {this.state.loading && <h1>Loading...</h1> }
                {this.state.images.map(({ id, webformatURL, largeImageURL, tags }) => (
                
                    <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags = {tags}
                    onClickProps = {this.bigImageSetState}
                    />
                ))}
                {this.state.images.length !== 0  &&
                <Button onClick = {this.loadMore}/>}
            
            </ul> 
            
            { this.state.largeImageURL && 

            <Modal onClose = {this.closeModal}>
                <button type="button" className={styles.CloseBtn} onClick = {this.closeModal}>X</button>
                <img src={this.state.largeImageURL} alt={this.state.tags} />
            </Modal>
            
        
        }
            </>
        )
    }
}

export default ImageGallery;