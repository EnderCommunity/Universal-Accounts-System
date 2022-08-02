/**
 * 
 * Manage the user's data and state
 * 
 **/

import { createSignal } from "solid-js";

// user data module
let userDataModule = {
    visual: {
        preferredColorScheme: 1, // 0 - system, 1 - light, 2 - dark
    }
};

export const [isSignedIn, setSignedIn] = createSignal(false);
export const [userData, setUserData] = createSignal(null);

export function updateUserState(){

    // Update the "isSignedIn" variable
    setSignedIn(false);

    // Update the "userData" variable
    if(isSignedIn() == true){
        setUserData(0);
    }else{
        setUserData(userDataModule);
    }

}