import { Component } from 'react';
import styles from '../components/Modal.module.css';

 class Modal extends Component{   

    componentDidMount() {
        console.log('Modal mounted');
    }
    componentWillUnmount() {
        console.log('Modal unmounted');
    }
    
 
    render(){    
        return (            
            <div className={styles.Overlay}>
                <div className={styles.Modal}>
                    {this.props.children}
                    
                </div>
            </div>
        )
    } 
}

export default Modal

/*  */