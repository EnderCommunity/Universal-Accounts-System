/**
 * 
 * Manage the website's <routes> element
 * 
 **/

import { Routes, Route } from "@solidjs/router";
import { lazy } from "solid-js";

// Import all the website's pages
const Pages = {
    Home: lazy(() => import("./../../pages/home.jsx")),
    New: lazy(() => import("./../../pages/new.jsx")),
    Login: lazy(() => import("./../../pages/user/login.jsx")),
    LoginPassword: lazy(() => import("./../../pages/user/login/password.jsx")),
    LoginChallenge: lazy(() => import("./../../pages/user/challenge.jsx")),
    Register: lazy(() => import("./../../pages/user/register.jsx"))
}, Error = {
    NotFound: lazy(() => import("./../../pages/error/404.jsx"))
};

export function WebRoutes(props){
    return (
    <Routes>
        {/* The error page */}
        <Route path={"*"} element={<Error.NotFound report={props.ping}></Error.NotFound>} />

        {/* Pages that require the user to be signed in, and can be used when signed in */}
        <Route path={"/"} element={<Pages.Home report={props.ping}></Pages.Home>} />

        {/* Pages that DON'T require the user to be signed in, and the user can't use while signed in */}
        <Route path={"/new"} element={<Pages.New report={props.ping}></Pages.New>} />
        <Route path={"/user/login"} element={<Pages.Login report={props.ping}></Pages.Login>} />
        <Route path={"/user/login/password"} element={<Pages.LoginPassword report={props.ping}></Pages.LoginPassword>} />
        <Route path={"/user/challenge"} element={<Pages.LoginChallenge report={props.ping}></Pages.LoginChallenge>} />
        <Route path={"/user/register"} element={<Pages.Register report={props.ping}></Pages.Register>} />
    </Routes>
    );
}

export default WebRoutes;