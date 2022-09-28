/**
 * 
 * Manage the content of the 2 factor auth options page
 * 
 **/

import style from './../../assets/styles/pages/user.challenge.module.css';

import { Title } from './../../assets/components/Title.jsx';
import { Mark, Button, FlexContainer, Link } from './../../assets/components/CustomElements.jsx';

function ChallengeOption(props){
    return (
        <Button light class={style.challengeOptionButton}>
            {props.children}
        </Button>
    );
}

export default function Challenge(props){
    props.report();
    return <>
        <Title>Sign In</Title>
        <h1>2-Step Verification</h1>
        <br/>
        <h3>For your safety please <Mark>verify your identity</Mark> further using one of the following methods:</h3>
        <FlexContainer style={{width: "450px"}}>
            <ChallengeOption>Use your security key</ChallengeOption>
            <ChallengeOption>Tap <strong>Yes</strong> on your mobile device</ChallengeOption>
            <ChallengeOption>Use a security code from your mobile device</ChallengeOption>
            <ChallengeOption>Enter one of your <strong>emergency</strong> backup codes</ChallengeOption>
            <ChallengeOption>Get a verification code from <strong>[App_Name]</strong></ChallengeOption>
        </FlexContainer>
        <div class={style.suggestion}>
            <hr class={style.divider}/>
            <text>Can't do any of these? Try to <Link href={"/"}>recover your account</Link>!</text>
        </div>
    </>;
}