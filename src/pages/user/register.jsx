/**
 * 
 * Manage the content of the sign up page
 * 
 **/

import { Title } from './../../assets/components/Title.jsx';
import { Input, setInputState, Button, Notice, Mark, FlexContainer } from './../../assets/components/CustomElements.jsx';
import { onMount } from "solid-js";
import { useNavigate } from '@solidjs/router';

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
            elm.hasValue = (elm.value.replace(/\s/gi, "") != "");
            elm.oninput = updateButton;
        }else if(elm.tagName == "SELECT"){
            selectElms.push(elm);
            elm.hasValue = (elm.selectedIndex > 0);
            elm.addEventListener('change', updateButton);
        }else{
            throw new Error("Unexpected element!");
        }
    });
}

let localContent = document.getElementById("local-content");

export function nextCheck(button, callback, action){
    // Disable the button to prevent duplicate requests
    button.setAttribute("disabled", "");
    localContent.dataset.processing = true;

    let error = false, calledDone = false, done = function(){
        if(!calledDone){
            calledDone = true;
            button.removeAttribute("disabled");
            localContent.dataset.processing = false;
            if(!error){
                action();
            }
        }
    };

    callback(function(){
        error = true;
        done();
    }, done);
}

export default function Register(props){
    let navigate = useNavigate(),
        nextButton, firstName, lastName;
    onMount(() => {
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
                            navigate("/user/register/username");
                        });
                    }} primary>Next</Button>
            </FlexContainer>
        </FlexContainer>
    </>;
}