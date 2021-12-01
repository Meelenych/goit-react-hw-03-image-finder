import ImageGalleryItem from './ImageGalleryItem'
import { Component } from 'react';
import styles from '../components/ImageGallery.module.css';
import Modal from '../components/Modal';
import Button from '../components/Button';
import Loader from '../components/Loader';
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
    //URL params
    const page = this.state.page
    const API_KEY = "23474268-70d851d8204f5902d9e83a665";
    let searchQuery = this.props.submitValue;
    const baseUrl = `https://pixabay.com/api/`;
    const params = `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const url = baseUrl + params;
    //Main fetch
    if (prevProps.submitValue !== searchQuery) {
        this.setState({loading: true});
      fetch(url)
        .then((response) => {
            console.log('response',response);
            
          return response.json();
        })
        .then((results) => {
          this.setState({
              images: [...results.hits],
            });
            if(results.hits.length !== 0){toast.success('Search successfull!')}
            else if (results.hits.length === 0){toast.error ('Oops, nothing found!')}
            // else if (results.hits.length === 0){this.setState({loading: false})}
            //   console.log("results", results.hits);
        })
        .catch((err) => {
            toast.error ('Fetch error!');
        }
            
        )
        .finally(()=> this.setState({loading: false}))
        
    }
    //Load more fetch
    if(page !== prevState.page){
                fetch(url)
        .then((response) => {
            console.log('response',response);
            
          return response.json();
        })
        .then((results) => {
          this.setState(prevState => {
            return {images: [...prevState.images, ...results.hits]}               
            });
            if(results.hits.length !== 0){toast.success('More results successfully loaded!')}
            else if (results.hits.length === 0){toast.error ('Oops, nothing more!')}
            // else if (results.hits.length === 0){this.setState({loading: false})}
            //   console.log("results", results.hits);
        })
        .catch((err) => {
            toast.error ('Fetch error!');
        }
            
        )
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
                {this.state.loading && <Loader/> }
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