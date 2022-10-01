/**
 * 
 * Manage the content of the sign up page
 * 
 **/

import { Title } from './../../assets/components/Title.jsx';
import { Input, Button, Notice, Mark, FlexContainer } from './../../assets/components/CustomElements.jsx';

export function InputFieldsContainer(props){
    return (<div style={{width: "100%", position: "relative", overflow: "hidden"}}>{props.children}</div>);
}

export default function Register(props){
    props.report();
    return <>
        <Title>Sign Up</Title>
        <h1>Create a Ciel account</h1>
        <br/>
        <h3>Enter your <Mark>first name</Mark> and <Mark>last name</Mark>!</h3>
        <FlexContainer space={"around"} style={{width: "400px"}}>
            <InputFieldsContainer>
                <Input id={"first_name"} type={"text"} label={"First name"} autocomplete={"given-name"}
                        style={{width: "calc(100% - 8px)"}}/>
                <Input id={"last_name"} type={"text"} label={"Last name"} autocomplete={"family-name"}
                        style={{width: "calc(100% - 8px)"}}/>
            </InputFieldsContainer>
            <Notice>It's recommended to use a device that you own and use frequently to create your Ciel account!</Notice>
            <FlexContainer space={"between"} horozontal no-grow>
                <Button type={"link"} href={"/user/login"}>Sign in instead</Button>
                <Button type={"link"} href={"/user/register/username"} primary>Next</Button>
            </FlexContainer>
        </FlexContainer>
    </>;
}