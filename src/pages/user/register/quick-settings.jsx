/**
 * 
 * Manage the content of the sign up page ('quick settings' section)
 * 
 **/

import style from './../../../assets/styles/pages/user.quick-settings.module.css';
 
import { Title } from './../../../assets/components/Title.jsx';
import { Button, Notice, Mark, FlexContainer, Radio, Divider } from './../../../assets/components/CustomElements.jsx';
import { InputFieldsContainer } from './../register.jsx';

function QuickOption(props){
    return <Radio {...props}>{props.children}</Radio>
}

function QuickSetting(props){
    return (<div class={style.quickSettingContainer}>
        <text class={style.title}>{props.title}</text>
        <text class={style.description}>{props.description}</text>
        <div class={style.contentContainer}>{props.children}</div>
    </div>);
}

export default function RegisterQuickSettings(props){
    props.report();
    return <>
        <Title>Sign Up</Title>
        <h1>Quick Settings</h1>
        <br/>
        <h3>Choose the settings that suit your <Mark>privacy preferences</Mark>!</h3>
        <FlexContainer space={"around"} style={{width: "400px"}}>
            <InputFieldsContainer>
                <QuickSetting title={"[My_Title_1]"} description={"[My_Description_1]"}>
                    <QuickOption id={"o1"} name={"n"} checked>[Option_1]</QuickOption>
                    <QuickOption id={"o2"} name={"n"}>[Option_2]</QuickOption>
                    <QuickOption id={"o3"} name={"n"}>[Option_3]</QuickOption>
                </QuickSetting>
                <Divider/>
                <QuickSetting title={"[My_Title_2]"} description={"[My_Description_2]"}>
                    <QuickOption id={"o21"} name={"n2"} checked>[Option_1]</QuickOption>
                    <QuickOption id={"o22"} name={"n2"}>[Option_2]</QuickOption>
                    <QuickOption id={"o23"} name={"n2"}>[Option_3]</QuickOption>
                </QuickSetting>
                <Divider/>
                <QuickSetting title={"[My_Title_3]"} description={"[My_Description_3]"}>
                    <QuickOption id={"o31"} name={"n3"} checked>[Option_1]</QuickOption>
                    <QuickOption id={"o32"} name={"n3"}>[Option_2]</QuickOption>
                    <QuickOption id={"o33"} name={"n3"}>[Option_3]</QuickOption>
                </QuickSetting>
                <Divider/>
                <QuickSetting title={"[My_Title_4]"} description={"[My_Description_4]"}>
                    <QuickOption id={"o41"} name={"n4"} checked>[Option_1]</QuickOption>
                    <QuickOption id={"o42"} name={"n4"}>[Option_2]</QuickOption>
                    <QuickOption id={"o43"} name={"n4"}>[Option_3]</QuickOption>
                </QuickSetting>
            </InputFieldsContainer>
            <Notice>You can always change your account's settings and privacy preferences using your account's control panel!</Notice>
            <FlexContainer space={"between"} horozontal no-grow>
                <Button type={"action"} function={function(){history.back()}}>Go back</Button>
                <Button type={"link"} href={"/user/register/agreement"} primary>Next</Button>
            </FlexContainer>
        </FlexContainer>
    </>;
}