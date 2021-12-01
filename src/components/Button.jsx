import { Component } from 'react';
import styles from '../components/Button.module.css'

class Button extends Component {    
    render() {
        return (            
            <button type="submit"  className={styles.Button}>
            <span className="button-label">LoadMore</span>
            </button>
        )
    }
}

export default Button;