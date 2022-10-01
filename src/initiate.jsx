/**
 *
 * The website's loading initiator
 *
 **/

// Step 1: Ready the render function
/* @refresh reload */
import { render } from 'solid-js/web';
import { createSignal } from "solid-js";

// Step 2: Ready the router
import { Router } from "@solidjs/router";

// Step 3: Check the user's status and get the relavent data:
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

// Step 4: Update the components that are relavent to the user's data
import { updateColorScheme } from './assets/scripts/colourScheme.jsx';
updateColorScheme(userData().visual.preferredColorScheme);

// Step 5: Import the required components
import GlobalBar from './assets/components/GlobalBar.jsx';
import GlobalFooter from './assets/components/GlobalFooter.jsx';
import LocalContent from './assets/components/LocalContent.jsx';

render(() =>{

    // Wait for the page's content to finish loading
    const [showContent, setShowContent] = createSignal(false);

    let contentLoadData = {GlobalBar: false, LocalContent: false},
        contentLoadReport = (context) => { // context - "GlobalBar", "LocalContent"
        contentLoadData[context] = true;
        if(contentLoadData.GlobalBar && contentLoadData.LocalContent){
            // Must run this when the user's basic info are aquired from the server and fully loaded!
            // setTimeout(() => setShowContent(true), 1500); // TMP
            setShowContent(true);
            document.body.dataset.loaded = true;
        }
    };

    // Return the global page content
    return <Router>
        <GlobalBar userProfile={userData().personal.profilePicture} showContent={showContent()} report={() => { contentLoadReport("GlobalBar"); }}/>
        <LocalContent userData={userData()} isSignedIn={isSignedIn()} showContent={showContent()} report={() => { contentLoadReport("LocalContent"); }}/>
        <GlobalFooter showContent={showContent()}/>
    </Router>;
}, document.body);
