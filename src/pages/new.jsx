/**
 * 
 * Manage the content of the page "/new"
 * 
 **/

import styles from './../assets/styles/pages/new.module.css';
import generalStyles from './../assets/styles/general.module.css';

// Enable dynamic page navigation
import { useNavigate } from "@solidjs/router";

export default function New(props){
    let navigate = useNavigate();

    props.report();
    return (<>
        <h1>Track your internets,<br/>with <text style={{color: 'var(--accent-color)'}}>one account</text>!</h1>
        <br/>
        <h3 class={styles.subtext}>Use one account for all supported websites and services and keep track of all your important activities in one place!</h3>
        <div class={styles.buttonsContainer}>
            <button onClick={function(){ navigate("/user/login", { replace: false }); }} class={`${generalStyles.button} ${generalStyles.primarybutton}`}>Sign In to your Account</button>
            <br/>
            <button onClick={function(){ navigate("/user/register", { replace: false }); }} class={generalStyles.button}>Create a new account</button>
        </div>
    </>);
}