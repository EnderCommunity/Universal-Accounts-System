/**
 * 
 * Manage the content of the page "/new"
 * 
 **/

import styles from './../assets/styles/pages/new.module.css';

import { Title } from './../assets/components/Title.jsx';
import { Button } from './../assets/components/Button.jsx';

export default function New(props){
    props.report();
    return (<>
        <Title>Welcome</Title>
        <h1>Track your internets,<br/>with a <text style={{color: 'var(--accent-color)'}}>Ciel account</text>!</h1>
        <br/>
        <h3 class={styles.subtext}>Use one account for all supported websites and services and keep track of all your important activities in one place!</h3>
        <div class={styles.buttonsContainer}>
            <Button type={"link"} href={"/user/login"} primary>Sign In to your Account</Button>
            <br/>
            <Button type={"link"} href={"/user/register"}>Create a new account</Button>
        </div>
    </>);
}