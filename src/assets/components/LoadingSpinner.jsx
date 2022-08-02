/**
 * 
 * The loading animation elements
 * 
 **/

import styles from './../styles/loading.module.css';

function LoadingSpinner(){
    return (
        <div class={styles["lds-ring"]}><div></div><div></div><div></div><div></div></div>
    );
}
 
export default LoadingSpinner;
 