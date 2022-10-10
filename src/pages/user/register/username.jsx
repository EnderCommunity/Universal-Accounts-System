/**
 * 
 * Manage the content of the sign up page (username section)
 * 
 **/

import { Title } from './../../../assets/components/Title.jsx';
import { Input, Button, Notice, Mark, FlexContainer, setInputState, showDialog } from './../../../assets/components/CustomElements.jsx';
import { InputFieldsContainer, nextCheck, redoRegister, ButtonsContainer } from './../register.jsx';
import { onMount } from "solid-js";
import { useNavigate } from '@solidjs/router';
import { registerData, checkDataByOrder } from './../../../assets/scripts/pages/registerData.jsx';

export default function RegisterUsername(props){
    let navigate = useNavigate(),
        nextButton, username;
    onMount(() => {
        let usernameInput = username.children[0].children[0];
        if(registerData.username != undefined){
            usernameInput.value = registerData.username;
        }
        let check = () => {
            if(usernameInput.value.length < 3 || usernameInput.value.length > 20){
                nextButton.setAttribute("disabled", "");
            }else{
                nextButton.removeAttribute("disabled");
            }
        };
        check();
        usernameInput.oninput = check;
    });
    props.report();
    return <>
        <Title>Sign Up</Title>
        <h1>Choose a username!</h1>
        <br/>
        <h3>Choose your own <Mark>username</Mark>!</h3>
        <FlexContainer space={"around"} style={{width: "400px"}}>
            <InputFieldsContainer>
                <Input ref={username} id={"username"} type={"text"} label={"Username"} autocomplete={"off"}
                        style={{width: "calc(100% - 8px)"}} maxlength={20}/>
            </InputFieldsContainer>
            <Notice>Your username is public, make sure it does not contain any sensitive or personal information!</Notice>
            <ButtonsContainer>
                <Button type={"action"} function={function(){history.back()}}>Go back</Button>
                <Button ref={nextButton} type={"action"} function={function(){
                    nextCheck(nextButton, function(setError, isDone){
                        let usernameInput = username.children[0].children[0],
                            userValue = usernameInput.value.toLowerCase();
                        if(!/^[A-Za-z0-9_]*$/.test(userValue)){
                            setInputState(username, false, "Can only contain letters, numbers, and underscores!");
                            setError();
                        }else if(!/[a-zA-Z]/.test(userValue)){
                            setInputState(username, false, "Must at least contain one letter!");
                            setError();
                        }else if(userValue.length < 3 || userValue.length > 20){
                            setInputState(username, false, "Must be at least 3 characters long, and cannot exceed 20 characters!");
                            setError();
                        }else{
                            // Advanced checks
                            var request = new XMLHttpRequest();
                            request.open('GET', '/lists/reserved_usernames.txt');
                            request.send(null);
                            request.onloadend = function(){
                                if(request.status === 200){
                                    let reservedUsernames = request.responseText;
                                    if(reservedUsernames.includes(userValue)){
                                        setInputState(username, false, "Username is reserved by the system!");
                                        setError();
                                    }else{
                                        // Check if the username is taken!
                                        showDialog("Caution!", "No profanity check for 'username'");
                                        showDialog("Caution!", "No availability check for 'username'");
                                    }
                                }else{
                                    setInputState(username, false, "An error occured, please try again later!");
                                    setError();
                                }
                                isDone();
                            };
                        }
                    }, function(){
                        registerData.username = username.children[0].children[0].value;
                        checkDataByOrder(2, function(error){
                            if(error){
                                redoRegister(navigate);
                            }else{
                                navigate("/user/register/password");
                            }
                        });
                    });
                }} primary>Next</Button>
            </ButtonsContainer>
        </FlexContainer>
    </>;
}