/**
 * 
 * Manage the content of the page "/new"
 * 
 **/

import styles from './../assets/styles/pages/new.module.css';
import generalStyles from './../assets/styles/general.module.css';

// Enable dynamic page navigation
import { Link } from "@solidjs/router";

import { Title } from './../assets/components/Title.jsx';

export default function New(props){
    props.report();
    return (<>
        <Title>Welcome</Title>
        <h1>Track your internets,<br/>with a <text style={{color: 'var(--accent-color)'}}>Ciel account</text>!</h1>
        <br/>
        <h3 class={styles.subtext}>Use one account for all supported websites and services and keep track of all your important activities in one place!</h3>
        <div class={styles.buttonsContainer}>
            <Link href={"/user/login"} class={`${generalStyles.button} ${generalStyles.primarybutton}`}>Sign In to your Account</Link>
            <br/>
            <Link href={"/user/register"} class={generalStyles.button}>Create a new account</Link>
        </div>
    </>);
}