/**
 * 
 * Manage the content of the sign in page
 * 
 **/

import { Title } from './../../assets/components/Title.jsx';
import { Input, Button } from './../../assets/components/interactive.jsx';

export default function Login(props){
    props.report();
    return <>
        <Title>Sign In</Title>
        "/user/login"!
        <Input id={"textInputField"} type={"text"} label={"Label"}/>
        <Button primary>a button!</Button>
        <Button>a button!</Button>
    </>;
}