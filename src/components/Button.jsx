import { Component } from 'react';

// import styles from './ContactForm.module.css';


class Button extends Component {    
    render() {
        return (            
            <button type="submit" className="button">
            <span className="button-label">LoadMore</span>
            </button>
        )
    }
}

export default Button;