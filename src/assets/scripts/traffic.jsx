/**
 * 
 *  Manage the traffic of the website
 *  
 **/

import { createEffect } from 'solid-js';
import { useLocation, useNavigate } from "@solidjs/router";

export function afterURLChange(callback){
    let location = useLocation();

    createEffect(() => {
        location.pathname;
        callback();
    });
}

// Check if the current page landing request is valid
export function landingCheck(signedIn){

    const location = useLocation(),
          navigate = useNavigate();

    createEffect(() => {

        // All homepage redirections
        if(location.pathname == '/'){
            // Always redirect new users to the path "/new" from the home page
            if(!signedIn){
                navigate("/new", { replace: true });
            }
        }else if(location.pathname.substring(4) == "/new" || location.pathname.substring(5) == "/user"){
            // Do not allow the user to view pages that fall under
            // the "/new" or "/user" directory when signed in!
            if(signedIn){
                navigate("/", { replace: false });
            }
        }

        console.log(location.pathname);

    });

};
