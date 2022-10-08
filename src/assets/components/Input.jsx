/**
 * 
 * The custom <Input> element
 * 
 **/

import generalStyles from './../styles/general.module.css';

import { processProps } from './_custom.jsx';

import ErrorIcon from './../icons/input_error.svg';

// Check "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" if you wish to support
// a new input type!
// Notice: you can refer to "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
// for info on the diffrent types of autocomplete
export function Input(props){
    let basicProps = processProps(props, generalStyles.inputFieldContainer),
        hint = (props.hint != undefined) ? (
            <div class={`${generalStyles.inputFieldHint} text`}>{props.hint}</div>
        ) : <div class={`${generalStyles.inputFieldHint} text`} style={{display: "none"}}></div>,
        input = (<input id={props.id} type={props.type} placeholder={" "}
                        autocomplete={(props.autocomplete) ? props.autocomplete : "off"}
                        class={generalStyles.inputField} maxlength={props.maxlength}/>);
    if(props.value){
        input.value = props.value;
    }
    if(typeof props.id != "string"){
        throw new Error("<Input> element must always have an ID!");
    }else if(typeof props.label != "string"){
        throw new Error("<Input> element must always have a label!");
    }else if(props.type == "text" || props.type == "url" || props.type == "tel" ||
        props.type == "password" || props.type == "number"){
        return (
            <div ref={props.ref} class={basicProps.class} style={basicProps.style}>
                <div class={generalStyles.inputFieldDataContainer}>
                    {input}
                    <label class={generalStyles.inputFieldLabel} for={props.id}>{props.label}</label>
                    <ErrorIcon class={generalStyles.inputErrorIcon}/>
                </div>
                {hint}
            </div>
        );
    }else{
        throw new Error("Unsupported <Input> type!");
    }
}

export function setInputState(Input, isValid, msg){
    if(isValid){
        Input.classList.remove(generalStyles.invalidData);
        Input.children[0].children[0].onchange = undefined;
        let hint = Input.children[1];
        hint.textContent = Input.dataset.hint;
        hint.style.display = (hint.textContent != "") ? null : "none";
        Input.removeAttribute("data-hint");
    }else{
        Input.classList.add(generalStyles.invalidData);
        if(typeof msg == "string"){
            let hintElm = Input.children[1];
            if(!Input.hasAttribute("data-hint")){
                Input.dataset.hint = hintElm.textContent;
            }
            hintElm.textContent = msg;
            hintElm.style.display = null;
        }else {
            throw new Error("Must attach an error message!");
        }
        Input.children[0].children[0].onchange = function(){
            setInputState(Input, true);
        };
    }
}

export default Input;