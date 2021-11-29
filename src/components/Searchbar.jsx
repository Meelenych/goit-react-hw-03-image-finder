import { Component } from 'react';
import styles from "../components/SearchBar.module.css"

class SearchBar extends Component {
    
    state = {
        changeValue : '',
    }

handleSubmit = (e)=> {
    e.preventDefault()
    if(this.state.changeValue.trim() === ''){
        alert('Please specify your request!')
        this.clearForm()
    }
    this.props.onFormSubmit(this.state.changeValue.toLowerCase().trim())
    this.clearForm()
}

handleChange = (e)=>{
    this.setState({changeValue: e.currentTarget.value}) 
}

clearForm = ()=>{
    this.setState({changeValue: ''})
}

    render() {
        return (
        <>
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm}
                    onSubmit = {this.handleSubmit}>
                        
                    <button type="submit" className={styles.SearchFormButton}>
                        <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={styles.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange = {this.handleChange}
                        value = {this.state.changeValue}                
                    />
                </form>
            </header>
           
        </>
        )
    }
}

export default SearchBar;