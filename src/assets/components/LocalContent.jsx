/**
 * 
 * The page's content
 * 
 **/

import styles from './../styles/localContent.module.css';
import LoadingSpinner from './LoadingSpinner.jsx';

import { Routes, Route, useLocation } from "@solidjs/router" /*Link*/
import { createSignal, createEffect, lazy } from "solid-js";

import { landingCheck, afterURLChange } from './../scripts/traffic.jsx';

// Import all the website's pages
const Pages = {
    Home: lazy(() => import("./../../pages/home.jsx")),
    New: lazy(() => import("./../../pages/new.jsx")),
    Login: lazy(() => import("./../../pages/user/login.jsx")),
    Register: lazy(() => import("./../../pages/user/register.jsx"))
};

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
        }
    });

    let container = (<div class={styles.container} onEmptied={function(){alert(0);}}>
        <Routes>
            {/* Pages that require the user to be signed in, and can be used when signed in */}
            <Route path={"/"} element={<Pages.Home report={updateLoadPing}></Pages.Home>} />

            {/* Pages that DON'T require the user to be signed in, and the user can't use while signed in */}
            <Route path={"/new"} element={<Pages.New report={updateLoadPing}></Pages.New>} />
            <Route path={"/user/login"} element={<Pages.Login report={updateLoadPing}></Pages.Login>} />
            <Route path={"/user/register"} element={<Pages.Register report={updateLoadPing}></Pages.Register>} />
        </Routes>
    </div>
    );

    // Check https://github.com/solidjs/solid-router for more info on how the navigation system works
    return (
        <div class={styles.localcontent} data-show-content={props.showContent}>
            {/*<Link href={"/"}>/</Link>
            <br/>
            <Link href={"/new"}>/new/</Link>
            <br/>
            <Link href={"/user/login"}>/new/login</Link>
            <br/>
            <Link href={"/user/register"}>/new/register</Link>
            <br/>*/}
            <div class={styles.loadingContainer} style={{display: (loadPing() < 0) ? null : 'none'}}>
                {console.log(container.childNodes.length == 0)}
                <LoadingSpinner/>
            </div>
            {container}
        </div>
    );
}
 
export default LocalContent;
 