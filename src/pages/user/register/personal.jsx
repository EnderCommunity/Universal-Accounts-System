/**
 * 
 * Manage the content of the sign up page (personal info section)
 * 
 **/

import { Title } from './../../../assets/components/Title.jsx';
import { Input, Select, Button, Notice, Mark, FlexContainer } from './../../../assets/components/CustomElements.jsx';
import { InputFieldsContainer } from './../register.jsx';

export default function RegisterPersonalInfo(props){
    props.report();
    return <>
        <Title>Sign Up</Title>
        <h1>Let's get personal!</h1>
        <br/>
        <h3>Enter your <Mark>personal details</Mark>!</h3>
        <FlexContainer space={"around"} style={{width: "400px"}}>
            <InputFieldsContainer>
            <FlexContainer horozontal style={{margin: 0, height: "58px"}}>
                    <Select id={"birthday_month"} label={"Month"}
                            style={{"min-width": "40%"}}></Select>
                    <Input id={"birthday_day"} type={"number"} label={"Day"} autocomplete={"bday-day"}
                            style={{}}/>
                    <Input id={"birthday_year"} type={"number"} label={"Year"} autocomplete={"bday-year"}
                            style={{}}/>
                </FlexContainer>
                <Select id={"gender"} label={"Gender"} style={{width: "calc(100% - 8px)"}}></Select>
            </InputFieldsContainer>
            {/*<Input id={"birthday_month"} type={"month"} label={"Month"} autocomplete={"bday-month"}
                    style={{width: "calc(100% - 8px)"}}/>
            <Input id={"birthday_day"} type={"day"} label={"Day"} autocomplete={"bday-day"}
                    style={{width: "calc(100% - 8px)"}}/>
            <Input id={"birthday_year"} type={"year"} label={"Year"} autocomplete={"bday-year"}
                    style={{width: "calc(100% - 8px)"}}/>*/}
            <Notice>Make sure to use your real date of birth. You can create a Ciel account as long as you are 13+ years old! (access to external services will be limited depending on your age)</Notice>
            <FlexContainer space={"between"} horozontal no-grow>
                <Button type={"action"} function={function(){history.back()}}>Go back</Button>
                <Button type={"link"} href={"/user/register/personal"} primary>Next</Button>
            </FlexContainer>
        </FlexContainer>
    </>;
}