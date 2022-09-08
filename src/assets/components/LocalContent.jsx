/**
 * 
 * The page's content
 * 
 **/

import styles from './../styles/localContent.module.css';

import { Routes, Route, Link, useLocation, useNavigate } from "@solidjs/router"
import { lazy } from "solid-js";

import { landingCheck } from './../scripts/traffic.jsx';

// Import all the website's pages
const Pages = {
    Home: lazy(() => import("./../../pages/home.jsx")),
    New: lazy(() => import("./../../pages/new.jsx")),
    Login: lazy(() => import("./../../pages/user/login.jsx")),
    Register: lazy(() => import("./../../pages/user/register.jsx"))
};

function LocalContent(props){

    // Check the landing request
    landingCheck(useLocation, useNavigate, props.isSignedIn);
    //console.log(props.userData);

    // props.userData;

    // Check https://github.com/solidjs/solid-router for more info on how the navigation system works
    return (
        <div class={styles.localcontent} data-show-content={props.showContent}>
            {props.source}
            <Link href={"/"}>/</Link>
            <br/>
            <Link href={"/new"}>/new/</Link>
            <br/>
            <Link href={"/user/login"}>/new/login</Link>
            <br/>
            <Link href={"/user/register"}>/new/register</Link>
            <br/>
            <Routes>
                {/* Pages that require the user to be signed in, and can be used when signed in */}
                <Route path={"/"} element={<Pages.Home report={props.report}></Pages.Home>} />

                {/* Pages that DON'T require the user to be signed in, and the user can't use when signed in */}
                <Route path={"/new"} element={<Pages.New report={props.report}></Pages.New>} />
                <Route path={"/user/login"} element={<Pages.Login report={props.report}></Pages.Login>} />
                <Route path={"/user/register"} element={<Pages.Register report={props.report}></Pages.Register>} />

            </Routes>
        </div>
    );
}
 
export default LocalContent;
 