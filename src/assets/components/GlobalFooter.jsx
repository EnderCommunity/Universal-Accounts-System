/**
 * 
 * The global bar, and its relative elements
 * 
 **/

import styles from './../styles/globalFooter.module.css';

function FooterLink(props){
    return (<a href={props.href} target={"_blank"} class={styles.link}>{props.children}</a>);
}

function GlobalFooter(props){
    return (
        <div id="global-footer" class={styles.globalfooter} data-show-content={props.showContent}>
            {/* Note to myself: You could use https://www.privacypolicies.com/ as a starting point */}
            <FooterLink href={"/legal/"}>Terms and Conditions</FooterLink> | 
            <FooterLink href={"/legal/"}>Privacy Policy</FooterLink> | 
            <FooterLink href={"/legal/"}>Cookies Policy</FooterLink> | 
            <FooterLink href={"/legal/"}>About Ciel</FooterLink>
        </div>
    );
}

export default GlobalFooter;
