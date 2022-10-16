/**
 * 
 * Manage the content of the sign in page (password page)
 * 
 **/

import { Title } from './../../../assets/components/Title.jsx';
import { Input, Button, Mark, FlexContainer, CheckBox } from './../../../assets/components/CustomElements.jsx';
import { onCleanup, onMount } from 'solid-js';
import { InputFieldsContainer } from './../login.jsx';

export default function LoginPassword(props){
    let nextButton;
    onMount(() => {
        let passwordInput = document.getElementById("password"), check = () => {
            if(passwordInput.value.length < 10 || passwordInput.value.length > 128){
                nextButton.setAttribute("disabled", "");
            }else{
                nextButton.removeAttribute("disabled");
            }
        };
        check();
        passwordInput.oninput = check;
        props.pageLoaded();
    });
    onCleanup(() => {
        props.pageUnloading();
    });
    return <>
        <Title>Sign In</Title>
        <h1>Welcome back, [FirstName]!</h1>
        <br/>
        <h3>Please enter <Mark>your password</Mark> to verify your identity!</h3>
        <FlexContainer space={"around"} style={{width: "400px"}}>
            <input id={"username-hidden"} type={"username"} style={"display: none;"} value={"TestUsername"}/>
            <InputFieldsContainer>
                <Input id={"password"} type={"password"} label={"Password"}
                        autocomplete={"current-password"}
                        hint={<CheckBox id={"showPassword"} label={"Show password"}
                                        style={{margin: "12px 0px 0px 0px"}}
                                        checked={false}
                                        onActive={function(){
                                            document.getElementById("password").type = "text";
                                        }}
                                        onInactive={function(){
                                            document.getElementById("password").type = "password";
                                        }}
                            />}
                        style={{width: "calc(100% - 8px)"}}/>
            </InputFieldsContainer>
            <FlexContainer space={"between"} horozontal no-grow>
                <Button type={"link"} href={"/user/recovery/password"}>Forgot password?</Button>
                <Button ref={nextButton} type={"link"} href={"/user/challenge"} primary>Next</Button>
            </FlexContainer>
        </FlexContainer>
    </>;
}