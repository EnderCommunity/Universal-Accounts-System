/**
 * 
 * Manage the website's colour scheme!
 * 
 **/

import { createSignal } from "solid-js";

export function updateColorScheme(preference){ // 0 - system, 1 - light, 2 - dark
    if(preference == 1){
        document.documentElement.dataset.colorScheme = "light";
    }else if(preference == 2){
        document.documentElement.dataset.colorScheme = "dark";
    }else{
        let matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
        document.documentElement.dataset.colorScheme = matchMedia.matches ? "dark" : "light";
        matchMedia.addEventListener('change', event => {
            document.documentElement.dataset.colorScheme = event.matches ? "dark" : "light";
        });
    }
}