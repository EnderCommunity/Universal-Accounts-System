/**
 *
 * The website's loading initiator
 *
 **/

// Step 1: Ready the render function
/* @refresh reload */
import { render } from 'solid-js/web';

// Step 2: Check the user's status and get the relavent data:
//         * The user is not signed in?
//              -> Get the default user profile data!
//              -> Initiate the login/sign up process
//              -O Stop untill further notice!
//         * The user is signed in?
//              -> Get the user's relative data
//              -> Initiate the process of loading the main page content!
//              -O Stop untill further notice!
import { isSignedIn, userData, updateUserState } from './assets/scripts/user.jsx';
updateUserState(); // Update the user's data

// Step 3: Update the components that are relavent to the user's data
import { updateColorScheme } from './assets/scripts/colourScheme.jsx';
updateColorScheme(userData().visual.preferredColorScheme);

// Step 3: Import the required styles
//         * The style of the <body> and <html> elements
//         * The colour schemes
import './assets/styles/main.css';
import './assets/styles/colours.css';

// Step 4: Import the required components
import GlobalBar from './assets/components/GlobalBar.jsx';
import GlobalFooter from './assets/components/GlobalFooter.jsx';
import LocalContent from './assets/components/LocalContent.jsx';

//import App from './App';
//document.documentElement.dataset.showContent = true;
render(() =>{
    return <>
        <GlobalBar/>
        <LocalContent source={"main"}/>
        <GlobalFooter/>
    </>;
}, document.body);

setTimeout(() => document.documentElement.dataset.showContent = true, 1500);
