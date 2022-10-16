/**
 * 
 * The page's content
 * 
 **/

import styles from './../styles/localContent.module.css';
import LoadingSpinner from './LoadingSpinner.jsx';

// import { Routes, Route, useLocation } from "@solidjs/router"; /*Link*/
import { createSignal, onMount } from "solid-js";

import { landingCheck, afterURLChange } from './../scripts/traffic.jsx';
import { WebRoutes } from './../scripts/routes.jsx';

function LocalContent(props){

    // Check the landing request
    landingCheck(props.isSignedIn);
    //log(props.userData);

    // props.userData;

    let loadingContainer,
        containerRef,
        container = (<div ref={containerRef} class={styles.container} onEmptied={function(){alert(0);}} data-show={false}>
        <WebRoutes pageLoad={function(){
            props.report();
            loadingContainer.dataset.show = false;
            containerRef.dataset.show = true;
        }} pageUnload={function(){
            loadingContainer.dataset.show = true;
            containerRef.dataset.show = false;
        }}/>
    </div>
    ), localContent;

    onMount(()=>{
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === "attributes") {
                    if(localContent.dataset.processing == "true" && !localContent.hasAttribute("inert")){
                        localContent.setAttribute("inert", "");
                    }else if(localContent.dataset.processing == "false" && localContent.hasAttribute("inert")){
                        localContent.removeAttribute("inert");
                    }
                }
            });
        });
        observer.observe(localContent, {
            attributes: true //configure it to listen to attribute changes
        });
    });

    // Check https://github.com/solidjs/solid-router for more info on how the navigation system works
    return (
        <div ref={localContent} id={"local-content"} class={styles.localcontent} data-show-content={props.showContent} data-processing={false}>
            {/*<Link href={"/"}>/</Link>
            <br/>
            <Link href={"/new"}>/new/</Link>
            <br/>
            <Link href={"/user/login"}>/new/login</Link>
            <br/>
            <Link href={"/user/register"}>/new/register</Link>
            <br/>*/}
            <div ref={loadingContainer} class={styles.loadingContainer} data-show={false}>
                <LoadingSpinner/>
            </div>
            {container}
        </div>
    );
}
 
export default LocalContent;
 