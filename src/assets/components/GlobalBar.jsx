/**
 * 
 * The global bar, and its relative elements
 * 
 **/

import { createSignal } from "solid-js";
import styles from './../styles/globalBar.module.css';
import LoadingSpinner from './LoadingSpinner.jsx'

function UserProfile(props){
    const [showImage, setShowImage] = createSignal(false);
    return (
        <div class={styles.userprofile} unselectable>
            <LoadingSpinner style={{display: !showImage() ? null : 'none'}}/>
            <img draggable={false} class={styles.userProfileImage} width={70} height={70} style={{display: showImage() ? null : 'none'}} onLoad={function(e){ setShowImage(true); props.report(); }} src={props.picture}/>
        </div>
    );
}

function GlobalBar(props){
    return (
        <div class={styles.globalbar} data-show-content={props.showContent}>
            <UserProfile picture={props.userProfile} report={props.report}/>
        </div>
    );
}

export default GlobalBar;
