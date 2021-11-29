import { Component } from "react";
import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import styles from "./App.module.css";

export default class App extends Component {
  state = {
    images: [],
    submitValue: "",
  };

  onFormSubmit = (data) => {
    this.setState({ submitValue: data });
  };

  async componentDidUpdate(prevProps, prevState) {
    //Autorization
    const API_KEY = "23474268-70d851d8204f5902d9e83a665";
    //URL and query params====================
    let pageNumber = 1;
    let perPage = 12;
    let imgType = "photo";
    let imageOrientation = "horizontal";
    let searchQuery = this.state.submitValue;
    //=====================================
    const baseUrl = `https://pixabay.com/api/`;
    const params = `?q=${searchQuery}&page=${pageNumber}&key=${API_KEY}&image_type=${imgType}&orientation=${imageOrientation}&per_page=${perPage}`;
    const url = baseUrl + params;
    //URL and query params END===================

    if (prevState.submitValue !== searchQuery) {
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

  render() {
    return (
      <div className={styles.App}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
