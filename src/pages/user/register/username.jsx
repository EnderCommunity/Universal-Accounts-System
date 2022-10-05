/**
 * 
 * Manage the content of the sign up page (username section)
 * 
 **/

import { Title } from './../../../assets/components/Title.jsx';
import { Input, Button, Notice, Mark, FlexContainer } from './../../../assets/components/CustomElements.jsx';
import { InputFieldsContainer, dataStatusCallback } from './../register.jsx';
import { onMount } from "solid-js";

export default function RegisterUsername(props){
    let nextButton = (<Button type={"link"} href={"/user/register/password"} primary>Next</Button>);
    onMount(() => {
        dataStatusCallback(nextButton(), "username");
    });
    props.report();
    return <>
        <Title>Sign Up</Title>
        <h1>Choose a username!</h1>
        <br/>
        <h3>Choose your own <Mark>username</Mark>!</h3>
        <FlexContainer space={"around"} style={{width: "400px"}}>
            <InputFieldsContainer>
                <Input id={"username"} type={"text"} label={"Username"} autocomplete={"off"}
                        style={{width: "calc(100% - 8px)"}}/>
            </InputFieldsContainer>
            <Notice>Your username is public, make sure it does not contain any sensitive or personal information!</Notice>
            <FlexContainer space={"between"} horozontal no-grow>
                <Button type={"action"} function={function(){history.back()}}>Go back</Button>
                {nextButton}
            </FlexContainer>
        </FlexContainer>
    </>;
}