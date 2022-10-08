/**
 * 
 * Manage the content of the 2 factor auth options page
 * 
 **/

import style from './../../assets/styles/pages/user.challenge.module.css';

import { Title } from './../../assets/components/Title.jsx';
import { Mark, Button, FlexContainer, Link, Divider } from './../../assets/components/CustomElements.jsx';

// Import SVG icons
import SecurityKeyIcon from './../../assets/icons/security_key.svg';
import MobileDeviceIcon from './../../assets/icons/mobile_device.svg';
import SettingsAltIcon from './../../assets/icons/settings_alt.svg';
import LockIcon from './../../assets/icons/lock.svg';
import WidgetIcon from './../../assets/icons/widget.svg';

function ChallengeOption(props){
    return (
        <Button light class={style.challengeOptionButton} icon={props.icon}>
            {props.children}
        </Button>
    );
}

function SecurityKey(){
    return (<ChallengeOption icon={<SecurityKeyIcon/>}>Use your security key</ChallengeOption>);
}
function AppPrompt(){
    return (<ChallengeOption icon={<MobileDeviceIcon/>}>Tap <strong>Yes</strong> on your mobile device</ChallengeOption>);
}
function OfflineAppCode(){
    return (<ChallengeOption icon={<SettingsAltIcon/>}>Use a security code from your mobile device</ChallengeOption>);
}
function BackupCodes(){
    return (<ChallengeOption icon={<LockIcon/>}>Enter one of your <strong>emergency</strong> backup codes</ChallengeOption>);
}
function AuthApp(props){
    return (<ChallengeOption icon={<WidgetIcon/>}>Get a verification code from <strong>{props.name}</strong></ChallengeOption>);
}

export default function Challenge(props){
    props.report();
    return <>
        <Title>Sign In</Title>
        <h1>2-Step Verification</h1>
        <br/>
        <h3>For your safety please <Mark>verify your identity</Mark> further using one of the following methods:</h3>
        <FlexContainer style={{width: "400px"}}>
            <SecurityKey/>
            <AppPrompt/>
            <OfflineAppCode/>
            <BackupCodes/>
            <AuthApp name={"[App_Name]"}/>
            {/*<AuthApp name={"[App_Name_2]"}/>
            <AuthApp name={"[App_Name_3]"}/>
            <AuthApp name={"[App_Name_4]"}/>
            <AuthApp name={"[App_Name_5]"}/>
            <AuthApp name={"[App_Name_6]"}/>
            <AuthApp name={"[App_Name_7]"}/>
            <AuthApp name={"[App_Name_8]"}/>
            <AuthApp name={"[App_Name_9]"}/>
            <AuthApp name={"[App_Name_10]"}/>*/}
        </FlexContainer>
        <div class={style.suggestion}>
            <Divider/>
            <text>Can't do any of these? Try to <Link href={"/user/recovery/two-factor"}>recover your account</Link>!</text>
        </div>
    </>;
}