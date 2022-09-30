/**
 * 
 * Manage the content of the sign in page
 * 
 **/

import { Title } from './../../assets/components/Title.jsx';
import { Input, Button, Notice, Mark, FlexContainer, Link } from '../../assets/components/CustomElements.jsx';

export default function Login(props){
    props.report();
    return <>
        <Title>Sign In</Title>
        <h1>Sign in</h1>
        <br/>
        <h3>Use your <Mark>Ciel account</Mark> securely!</h3>
        <FlexContainer space={"around"} style={{width: "400px"}}>
            <Input id={"username"} type={"text"} label={"Username"} autocomplete={"username"}
                    hint={<Link href={"/user/recovery/username"}>Forgot username?</Link>}
                    style={{width: "100%"}}/>
            <Notice>Not using your own device? Use Guest mode or Incognito mode to sign in privately.</Notice>
            <FlexContainer space={"between"} horozontal no-grow>
                <Button type={"link"} href={"/user/register"}>Create account</Button>
                <Button type={"link"} href={"/user/login/password"} primary>Next</Button>
            </FlexContainer>
        </FlexContainer>
    </>;
}