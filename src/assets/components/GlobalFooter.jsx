/**
 * 
 * The global bar, and its relative elements
 * 
 **/
import styles from './../styles/globalFooter.module.css';
function GlobalFooter(props){
    return (
        <div class={styles.globalfooter} data-show-content={props.showContent}>Terms and Conditions | About This Service | About 0x0C</div>
    );
}

export default GlobalFooter;
