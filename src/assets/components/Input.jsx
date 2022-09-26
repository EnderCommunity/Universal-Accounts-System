/**
 * 
 * The custom <Input> element
 * 
 **/

import generalStyles from './../styles/general.module.css';

// Check "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" if you wish to support
// a new input type!
export function Input(props){
    if(typeof props.id != "string"){
        throw new Error("Input must always have an ID!");
    }else if(typeof props.label != "string"){
        throw new Error("Input must always have a label!");
    }else if(props.type == "text" || props.type == "url" || props.type == "tel" ||
        props.type == "password" || props.type == "number"){
        return (
            <div class={generalStyles.inputFieldContainer}>
                <input id={props.id} type={props.type} placeholder={" "} class={generalStyles.inputField} />
                <label class={generalStyles.inputFieldLabel} for={props.id}>{props.label}</label>
            </div>
        );
    }else{
        throw new Error("Unsupported <Input> type!");
    }
}

export default Input;