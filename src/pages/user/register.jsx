/**
 * 
 * Manage the content of the sign up page
 * 
 **/

import { Title } from './../../assets/components/Title.jsx';
import { Input, setInputState, Button, Notice, Mark, FlexContainer, showDialog } from './../../assets/components/CustomElements.jsx';
import { onMount } from "solid-js";
import { useNavigate } from '@solidjs/router';
import { registerData, resetRegisterData } from './../../assets/scripts/pages/registerData.jsx';

export function InputFieldsContainer(props){
    return (<div style={{width: "100%", position: "relative", overflow: "hidden"}}>{props.children}</div>);
}

export function clientDataCheck(buttonElm, ...elmIDs){
    let inputElms = [],
        selectElms = [];
    buttonElm.setAttribute("disabled", "");
    function updateButton(){
        buttonElm.removeAttribute("disabled");
        for(let i = 0; i < inputElms.length; i++){
            if(inputElms[i].value.replace(/\s/gi, "") == ""){
                buttonElm.setAttribute("disabled", "");
                break;
            }
        }
        for(let i = 0; i < selectElms.length; i++){
            if(selectElms[i].selectedIndex < 1){
                buttonElm.setAttribute("disabled", "");
                break;
            }
        }
    }
    elmIDs.forEach(function(elmID){
        let elm = document.getElementById(elmID);
        if(elm.tagName == "INPUT"){
            inputElms.push(elm);
            elm.oninput = updateButton;
        }else if(elm.tagName == "SELECT"){
            selectElms.push(elm);
            elm.addEventListener('change', updateButton);
        }else{
            throw new Error("Unexpected element!");
        }
    });
    updateButton();
    return updateButton;
}

export function nextCheck(button, callback, action){
    let localContent = document.getElementById("local-content");

    // Disable the button to prevent duplicate requests
    button.setAttribute("disabled", "");
    localContent.dataset.processing = true;

    let error = [false], calledDone = false, done = function(){
        if(!calledDone){
            calledDone = true;
            button.removeAttribute("disabled");
            localContent.dataset.processing = false;
            if(!error[0]){
                action();
            }
        }
    };

    callback(function(){
        error[0] = true;
        done();
    }, done, error);
}

export function redoRegister(navigate){
    showDialog("Something went wrong!", "It looks like some of your registration data is missing!", [
        ["Refill info", function(dialog, remove){
            resetRegisterData();
            navigate("/user/register");
            remove();
        }]
    ]);
}

export default function Register(props){
    let navigate = useNavigate(),
        nextButton, firstName, lastName;
    onMount(() => {
        if(registerData.name.first != undefined){
            firstName.children[0].children[0].value = registerData.name.first;
        }
        if(registerData.name.last != undefined){
            lastName.children[0].children[0].value = registerData.name.last;
        }
        clientDataCheck(nextButton, "first_name", "last_name");
    });
    props.report();
    return <>
        <Title>Sign Up</Title>
        <h1>Create a Ciel account</h1>
        <br/>
        <h3>Enter your <Mark>first name</Mark> and <Mark>last name</Mark>!</h3>
        <FlexContainer space={"around"} style={{width: "400px"}}>
            <InputFieldsContainer>
                <Input ref={firstName} id={"first_name"} type={"text"} label={"First name"} autocomplete={"given-name"}
                        style={{width: "calc(100% - 8px)"}}/>
                <Input ref={lastName} id={"last_name"} type={"text"} label={"Last name"} autocomplete={"family-name"}
                        style={{width: "calc(100% - 8px)"}}/>
            </InputFieldsContainer>
            <Notice>It's recommended to use a device that you own and use frequently to create your Ciel account!</Notice>
            <FlexContainer space={"between"} horozontal no-grow>
                <Button type={"link"} href={"/user/login"}>Sign in instead</Button>
                <Button ref={nextButton} type={"action"} function={function(){
                        nextCheck(nextButton, function(setError, isDone){
                            let firstNameInput = firstName.children[0].children[0],
                                lastNameInput = lastName.children[0].children[0];
                            [
                                [firstNameInput, firstName],
                                [lastNameInput, lastName]
                            ].forEach(function(elms){
                                if(!/^[a-zA-Z]+$/.test(elms[0].value)){
                                    setInputState(elms[1], false, "Can only contain letters!");
                                    setError();
                                }
                            });
                            isDone();
                        }, function(){
                            registerData.name.first = firstName.children[0].children[0].value;
                            registerData.name.last = lastName.children[0].children[0].value;
                            navigate("/user/register/username");
                        });
                    }} primary>Next</Button>
            </FlexContainer>
        </FlexContainer>
    </>;
}