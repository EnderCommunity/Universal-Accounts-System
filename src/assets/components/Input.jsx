/**
 * 
 * The custom <Input> element
 * 
 **/

import generalStyles from './../styles/general.module.css';

// Check "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" if you wish to support
// a new input type!
// Notice: you can refer to "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
// for info on the diffrent types of autocomplete
export function Input(props){
    let style = (props.style != undefined) ? props.style : {},
        hint = (props.hint != undefined) ? (
            <div class={`${generalStyles.inputFieldHint} text`}>{props.hint}</div>
        ) : "";
    if(typeof props.id != "string"){
        throw new Error("Input must always have an ID!");
    }else if(typeof props.label != "string"){
        throw new Error("Input must always have a label!");
    }else if(props.type == "text" || props.type == "url" || props.type == "tel" ||
        props.type == "password" || props.type == "number"){
        return (
            <div class={generalStyles.inputFieldContainer} style={style}>
                <div class={generalStyles.inputFieldDataContainer}>
                    <input id={props.id} type={props.type} placeholder={" "}
                        autocomplete={(props.autocomplete) ? props.autocomplete : "off"}
                        class={generalStyles.inputField} />
                    <label class={generalStyles.inputFieldLabel} for={props.id}>{props.label}</label>
                </div>
                {hint}
            </div>
        );
    }else{
        throw new Error("Unsupported <Input> type!");
    }
}

export default Input;