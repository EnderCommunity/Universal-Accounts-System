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
    Register: lazy(() => import("./../../pages/user/register.jsx")),
    RegisterUsername: lazy(() => import("./../../pages/user/register/username.jsx")),
    RegisterPassword: lazy(() => import("./../../pages/user/register/password.jsx")),
    RegisterPersonalInfo: lazy(() => import("./../../pages/user/register/personal.jsx")),
    RegisterSecurityQuestions: lazy(() => import("./../../pages/user/register/security-questions.jsx")),
    RegisterQuickSettings: lazy(() => import("./../../pages/user/register/quick-settings.jsx")),
    RegisterAgreement: lazy(() => import("./../../pages/user/register/agreement.jsx"))
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
        <Route path={"/user/register/username"} element={<Pages.RegisterUsername report={props.ping}></Pages.RegisterUsername>} />
        <Route path={"/user/register/password"} element={<Pages.RegisterPassword report={props.ping}></Pages.RegisterPassword>} />
        <Route path={"/user/register/personal"} element={<Pages.RegisterPersonalInfo report={props.ping}></Pages.RegisterPersonalInfo>} />
        <Route path={"/user/register/security-questions"} element={<Pages.RegisterSecurityQuestions report={props.ping}></Pages.RegisterSecurityQuestions>} />
        <Route path={"/user/register/quick-settings"} element={<Pages.RegisterQuickSettings report={props.ping}></Pages.RegisterQuickSettings>} />
        <Route path={"/user/register/agreement"} element={<Pages.RegisterAgreement report={props.ping}></Pages.RegisterAgreement>} />
    </Routes>
    );
}

export default WebRoutes;