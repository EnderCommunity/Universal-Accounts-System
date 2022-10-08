/**
 * 
 * Manage the content of the sign up page (personal info section)
 * 
 **/

import { Title } from './../../../assets/components/Title.jsx';
import { Input, Select, Button, Notice, Mark, FlexContainer, setInputState } from './../../../assets/components/CustomElements.jsx';
import { InputFieldsContainer, clientDataCheck, nextCheck } from './../register.jsx';
import { onMount } from "solid-js";
import { useNavigate } from '@solidjs/router';

export default function RegisterPersonalInfo(props){
    let navigate = useNavigate(),
        nextButton, customGenderName, customGenderPronouns;
    onMount(() => {
        clientDataCheck(nextButton, "birthday_month", "birthday_day", "birthday_year",
                            "gender", "custom-gender-name", "custom-gender-pronouns");
    });
    props.report();
    return <>
        <Title>Sign Up</Title>
        <h1>Let's get personal!</h1>
        <br/>
        <h3>Enter your <Mark>personal details</Mark>!</h3>
        <FlexContainer space={"around"} style={{width: "400px"}}>
            <InputFieldsContainer>
                <FlexContainer horozontal style={{margin: 0}}>
                    <Select id={"birthday_month"} label={"Month"}
                            style={{"min-width": "40%", "margin-bottom": "auto"}}>
                                <option value={"1"}>January</option>
                                <option value={"2"}>February</option>
                                <option value={"3"}>March</option>
                                <option value={"4"}>April</option>
                                <option value={"5"}>May</option>
                                <option value={"6"}>June</option>
                                <option value={"7"}>July</option>
                                <option value={"8"}>August</option>
                                <option value={"9"}>September</option>
                                <option value={"10"}>October</option>
                                <option value={"11"}>November</option>
                                <option value={"12"}>December</option>
                            </Select>
                    <Input id={"birthday_day"} type={"number"} label={"Day"} autocomplete={"bday-day"}
                            style={{"margin-bottom": "auto"}}/>
                    <Input id={"birthday_year"} type={"number"} label={"Year"} autocomplete={"bday-year"}
                            style={{"margin-bottom": "auto"}}/>
                </FlexContainer>
                <Notice smaller>Enter your birthday</Notice>
                <Select id={"gender"} label={"Gender"} style={{width: "calc(100% - 8px)"}}
                        onChange={function(){
                            let value = document.getElementById("gender").value;
                            if(value != "custom"){
                                if(customGenderPronouns.style.display != "none"){
                                    customGenderPronouns.style.display = "none";
                                    customGenderName.style.display = "none";
                                    document.getElementById("custom-gender-pronouns").selectedIndex  = 1;
                                    document.getElementById("custom-gender-name").value = "FILL";
                                }
                            }else{
                                document.getElementById("custom-gender-pronouns").selectedIndex  = 0;
                                document.getElementById("custom-gender-name").value = "";
                                customGenderPronouns.style.display = null;
                                customGenderName.style.display = null;
                            }
                        }}>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"unknown"}>Prefer not to say</option>
                    <option value={"custom"}>Custom</option>
                </Select>
                <Input ref={customGenderName} id={"custom-gender-name"} type={"text"}
                        label={"Gender name"} style={{width: "calc(100% - 8px)", display: "none"}}
                        value={"FILL"}/>
                <Select ref={customGenderPronouns} id={"custom-gender-pronouns"}
                        label={"Prefered pronouns"}
                        style={{width: "calc(100% - 8px)", display: "none"}} selectedIndex={1}>
                            <option value={"he"}>he/him</option>
                            <option value={"she"}>she/her</option>
                            <option value={"they"}>they/them</option>
                </Select>
            </InputFieldsContainer>
            <Notice>Make sure to use your real date of birth. You can create a Ciel account as long as you are 13+ years old! (access to external services will be limited depending on your age)</Notice>
            <FlexContainer space={"between"} horozontal no-grow>
                <Button type={"action"} function={function(){history.back()}}>Go back</Button>
                <Button ref={nextButton} type={"action"} function={function(){
                    nextCheck(nextButton, function(setError, isDone){
                        //
                    }, function(){
                        navigate("/user/register/security-questions");
                    });
                }} primary>Next</Button>
            </FlexContainer>
        </FlexContainer>
    </>;
}