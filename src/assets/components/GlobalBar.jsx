/**
 * 
 * The global bar, and its relative elements
 * 
 **/

import styles from './../styles/globalBar.module.css';
import LoadingSpinner from './LoadingSpinner.jsx'
 
function UserProfile(){
    return (
        <div class={styles.userprofile}>
            <LoadingSpinner/>
        </div>
    );
}

function GlobalBar(){
    return (
        <div class={styles.globalbar}>
            <UserProfile/>
        </div>
    );
}

export default GlobalBar;
