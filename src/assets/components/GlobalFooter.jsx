/**
 * 
 * The global bar, and its relative elements
 * 
 **/
import styles from './../styles/globalFooter.module.css';
function GlobalFooter(props){
    return (
        <div class={styles.globalfooter} data-show-content={props.showContent}>
            <text>Terms and Conditions</text> | <text>About This Service</text> | <text>About 0x0C</text>
        </div>
    );
}

export default GlobalFooter;
