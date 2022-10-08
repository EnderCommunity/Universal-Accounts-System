/**
 * 
 * Manage the content of the sign up page (security questions section)
 * 
 **/

import { Title } from './../../../assets/components/Title.jsx';
import { Input, Select, Button, Notice, Mark, FlexContainer } from './../../../assets/components/CustomElements.jsx';
import { InputFieldsContainer, clientDataCheck } from './../register.jsx';
import { onMount } from "solid-js";

function checkQuestionStatus(number, answerElm){
    let question = document.getElementById("security-q" + number),
        answer = document.getElementById("security-a" + number);
    if(question.selectedIndex > 0){
        answer.value = "";
        if(answerElm.style.display == "none"){
            answerElm.style.display = null;
            answerElm.children[0].children[0].focus();
        }
    }else{
        answerElm.style.display = "none";
    }
}

export default function RegisterSecurityQuestions(props){
    let ansElm1,
        ansElm2,
        ansElm3,
        nextButton;
    onMount(() => {
        clientDataCheck(nextButton, "security-q1", "security-q2", "security-q3",
                            "security-a1", "security-a2", "security-a3");
    });
    props.report();
    return <>
        <Title>Sign Up</Title>
        <h1>Security is key!</h1>
        <br/>
        <h3>Choose your <Mark>security questions</Mark> and answer them!</h3>
        <FlexContainer space={"around"} style={{width: "400px"}}>
            <InputFieldsContainer>
                <Select id={"security-q1"} label={"Question 1"} style={{width: "calc(100% - 8px)"}}
                        onChange={function(){
                            checkQuestionStatus(1, ansElm1);
                        }}>
                    <option value={1}>What was your childhood nickname?</option>
                    <option value={2}>What was the name of your first stuffed animal?</option>
                    <option value={3}>What is the name of your favourite childhood friend?</option>
                    <option value={4}>What school did you attend for sixth grade?</option>
                    <option value={5}>What street did you live on in third grade?</option>
                    <option value={6}>What was the last name of your third-grade teacher?</option>
                </Select>
                <Input ref={ansElm1} id={"security-a1"} type={"text"} label={"Answer 1"}
                        style={{width: "calc(100% - 8px)", display: "none"}}/>
                </InputFieldsContainer>
                <InputFieldsContainer>
                <Select id={"security-q2"} label={"Question 2"} style={{width: "calc(100% - 8px)"}}
                        onChange={function(){
                            checkQuestionStatus(2, ansElm2);
                        }}>
                    <option value={1}>In what city or town did your mother and father meet?</option>
                    <option value={2}>Where were you when you had your first kiss?</option>
                    <option value={3}>What is the first name of the boy or girl that you first kissed?</option>
                    <option value={4}>In what city did you meet your spouse/significant other?</option>
                    <option value={5}>What is the name of the place your wedding reception was held?</option>
                    <option value={6}>What is your maternal grandmother's maiden name?</option>
                </Select>
                <Input ref={ansElm2} id={"security-a2"} type={"text"} label={"Answer 2"}
                        style={{width: "calc(100% - 8px)", display: "none"}}/>
                </InputFieldsContainer>
                <InputFieldsContainer>
                <Select id={"security-q3"} label={"Question 3"} style={{width: "calc(100% - 8px)"}}
                        onChange={function(){
                            checkQuestionStatus(3, ansElm3);
                        }}>
                    <option value={1}>What's your dream job?</option>
                    <option value={2}>In what city or town was your first job?</option>
                    <option value={3}>In what city does your nearest sibling live?</option>
                    <option value={4}>What is the country of your ultimate dream vacation?</option>
                    <option value={5}>What is the name of your favourite teacher?</option>
                    <option value={6}>What was the name of your elementary/primary school?</option>
                </Select>
                <Input ref={ansElm3} id={"security-a3"} type={"text"} label={"Answer 3"}
                        style={{width: "calc(100% - 8px)", display: "none"}}/>
            </InputFieldsContainer>
            <Notice>Security questions are important. They can help you regain access to your account when you get locked out - so don't share them with anyone!</Notice>
            <FlexContainer space={"between"} horozontal no-grow>
                <Button type={"action"} function={function(){history.back()}}>Go back</Button>
                <Button ref={nextButton} type={"link"} href={"/user/register/email"} primary>Next</Button>
            </FlexContainer>
        </FlexContainer>
    </>;
}