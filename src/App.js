import { Component } from "react";
import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import styles from "./App.module.css";
import { ToastContainer } from "react-toastify";

export default class App extends Component {
  state = {
    images: [],
    submitValue: "",
  };

  onFormSubmit = (data) => {
    this.setState({ submitValue: data });
  };

  render() {
    return (
      <div className={styles.App}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ImageGallery submitValue={this.state.submitValue} />
      </div>
    );
  }
}
