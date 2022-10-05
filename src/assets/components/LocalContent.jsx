/**
 * 
 * The page's content
 * 
 **/

import styles from './../styles/localContent.module.css';
import LoadingSpinner from './LoadingSpinner.jsx';

// import { Routes, Route, useLocation } from "@solidjs/router"; /*Link*/
import { createSignal } from "solid-js";

import { landingCheck, afterURLChange } from './../scripts/traffic.jsx';
import { WebRoutes } from './../scripts/routes.jsx';

function LocalContent(props){

    // Check the landing request
    landingCheck(props.isSignedIn);
    //console.log(props.userData);

    // props.userData;

    let tmpPing; // Use this variable inside the "afterURLChange" so no call loop can
                 // happen (since the afterURLChange function uses the createEffect function)
    const [loadPing, setLoadPing] = createSignal(1), updateLoadPing = function(){
        setLoadPing(tmpPing = (Math.abs(loadPing()) + 1));
        props.report();
    };
    tmpPing = loadPing();
    afterURLChange(function(){
        if(container.childNodes.length == 0){
            setLoadPing(tmpPing = (-Math.abs(tmpPing) - 1));
            /*
            // Solution #1:
            // Check if the user is offline
            if(!navigator.onLine){
                // Wait for a bit and check if the loading state changed
                setTimeout(function(){
                    if(tmpPing < 0){
                        // It is clear that this page is not cached, and the user is offline
                        // Therefore, you must prompt the user to reconnect to the internet
                        alert("You are offline!");
                    }
                }, 500);
            }

            // Solution #2:
            // Add an event listener to keep track of the user's connection status
            // Should the user go off-line, the website will enter "Offline Mode", where only few
            // essential sections will be avaliable for use.
            // Should the user be using a page that requires connection to the internet, prompt the
            // user to go back to the home page, or reconnect to the internet!

            // As of now, I'm convinced that solution #2 would be best. But there is the possibility
            // that the user might lose connect while loading a page, so solution #1 will be part of
            // this solution! In addition, I should take into account the possibility that the server
            // might go offline, so there should be a way to check if this ever happens!
            */
        }
    });

    let container = (<div class={styles.container} onEmptied={function(){alert(0);}}>
        <WebRoutes ping={updateLoadPing} />
    </div>
    );

    // Check https://github.com/solidjs/solid-router for more info on how the navigation system works
    return (
        <div id={"local-content"} class={styles.localcontent} data-show-content={props.showContent}>
            {/*<Link href={"/"}>/</Link>
            <br/>
            <Link href={"/new"}>/new/</Link>
            <br/>
            <Link href={"/user/login"}>/new/login</Link>
            <br/>
            <Link href={"/user/register"}>/new/register</Link>
            <br/>*/}
            <div class={styles.loadingContainer} style={{display: (loadPing() < 0) ? null : 'none'}}>
                <LoadingSpinner/>
            </div>
            {container}
        </div>
    );
}
 
export default LocalContent;
 