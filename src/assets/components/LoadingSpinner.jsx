/**
 * 
 * The loading animation elements
 * 
 **/

import styles from './../styles/loading.module.css';

function LoadingSpinner(props){
    return (
        <div style={props.style} class={styles["lds-ring"]}><div></div><div></div><div></div><div></div></div>
    );
}
 
export default LoadingSpinner;
 