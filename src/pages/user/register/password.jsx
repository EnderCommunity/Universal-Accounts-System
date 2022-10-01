/**
 * 
 * Manage the content of the sign up page (password section)
 * 
 **/

import { Title } from './../../../assets/components/Title.jsx';
import { Input, Button, Notice, Mark, FlexContainer, CheckBox, Link } from './../../../assets/components/CustomElements.jsx';
import { InputFieldsContainer } from './../register.jsx';

export default function RegisterPassword(props){
    props.report();
    return <>
        <Title>Sign Up</Title>
        <h1>Choose a password!</h1>
        <br/>
        <h3>Choose a <Mark>secure password</Mark> for your account!</h3>
        <FlexContainer space={"around"} style={{width: "400px"}}>
            <input id={"username-hidden"} type={"username"} style={"display: none;"} value={"TestUsername"}/>
            <InputFieldsContainer>
                <Input id={"password"} type={"password"} label={"Password"} autocomplete={"off"}
                        style={{width: "calc(100% - 8px)"}}/>
                <Input id={"password_confirm"} type={"password"} label={"Confirmation"} autocomplete={"off"}
                        style={{width: "calc(100% - 8px)"}}
                        hint={<CheckBox id={"showPassword"} label={"Show password"}
                                        style={{margin: "12px 0px 0px 0px"}}
                                        checked={false}
                                        onActive={function(){
                                            document.getElementById("password").type = "text";
                                            document.getElementById("password_confirm").type = "text";
                                        }}
                                        onInactive={function(){
                                            document.getElementById("password").type = "password";
                                            document.getElementById("password_confirm").type = "password";
                                        }}
                                />}/>
            </InputFieldsContainer>
            <Notice>The password must be at least 10 characters long, with a mix of letters and numbers!</Notice>
            <FlexContainer space={"between"} horozontal no-grow>
                <Button type={"action"} function={function(){history.back()}}>Go back</Button>
                <Button type={"link"} href={"/user/register/personal"} primary>Next</Button>
            </FlexContainer>
        </FlexContainer>
    </>;
}