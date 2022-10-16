/**
 * 
 * Manage the communication with the accounts system API
 * 
 **/

import { log, throwError } from './../console.jsx';

async function jsonPOST(url, json){
    return new Promise((resolve,reject)=>{
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mode: import.meta.env.MODE,
                ...json
            })
        })
        .then(response => response.json())
        .then(data => {
            log(data);
            resolve(data);
        }).catch(error => {
            reject(error);
        });
    }).catch(error => {
        reject(error);
    });
}

export function signInPOST(username, password, callback){
    jsonPOST("/APIs/accounts/core/login.json.php", {
        username: username,
        password: password
    }).then(function(data){
        callback(data.responseInfo.successful, data);
    }).catch(function(error){
        callback(false, undefined);
        throwError(error);
    });
}

export function signOutPOST(callback){
    jsonPOST("/APIs/accounts/core/logout.json.php", {
        //
    }).then(function(data){
        callback(data.responseInfo.successful, data);
    }).catch(function(error){
        callback(false, undefined);
        throwError(error);
    });
}

export function signUpPOST(data, callback){
    jsonPOST("/APIs/accounts/core/register.json.php",
        data
    ).then(function(data){
        callback(data.responseInfo.successful, data);
    }).catch(function(error){
        callback(false, undefined);
        throwError(error);
    });
}