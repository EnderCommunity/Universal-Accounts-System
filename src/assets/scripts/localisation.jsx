/**
 * 
 * Manage the localisation process
 * 
 **/

import rosetta from "rosetta";
import { showDialog } from "./../components/Dialog.jsx";
import { makeRequest } from './loader.jsx';

let i18n,
    lang = "",
    loadedLangs = [],
    langsWhitelist = ["en-GB", "ar"];

function loadFail(revertLang = false){
    showDialog("Error!", "We couldn't load the website in your preferred language", [
        (!revertLang) ? ["Reload website", function(dialog, remove){ location.reload(); }] :
                        ["Revert to previous language", function(dialog, removev){ remove(); alert("???"); }]
    ]);
}

function loadLang(newLang, callback){
    if(!langsWhitelist.includes(newLang)){
        newLang = langsWhitelist[0];
    }
    loadedLangs.push(newLang);
    makeRequest(`/locales/${newLang}/interface.json`, function(error, data){
        callback(error, JSON.parse(data));
    });
}

export function initiate_i18n(newLang, callback){
    if(!langsWhitelist.includes(newLang)){
        newLang = langsWhitelist[0];
    }
    lang = newLang;
    loadLang(lang, function(error, data){
        if(error){
            loadFail();
        }else{
            i18n = new rosetta({
                lang: data
            });
            i18n.locale(lang);
            callback();
        }
    });
}

export function changeLanguage(newLang, callback){
    if(!langsWhitelist.includes(newLang)){
        newLang = langsWhitelist[0];
    }
    lang = newLang;
    if(loadedLangs.includes(newLang)){
        i18n.locale(newLang);
        callback();
    }else{
        loadLang(newLang, function(error, data){
            if(error){
                loadFail(true);
            }else{
                i18n.locale(newLang);
                callback();
            }
        });
    }
}