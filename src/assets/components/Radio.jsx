/**
 * 
 * The custom <Radio> element
 * 
 **/

import generalStyles from './../styles/general.module.css';

import { processProps } from './_custom.jsx';

export function Radio(props){
    let basicProps = processProps(props, generalStyles.radio);
    if(typeof props.id != "string"){
        throw new Error("<Radio> must always have an ID!");
    }
    return (<div class={generalStyles.radioContainer}>
        <input type="radio" id={props.id} class={basicProps.class} name={props.name} style={basicProps.style} checked={props.checked} />
        <label class={generalStyles.radioLabel} for={props.id}>{props.children}</label>
    </div>);
}
   
export default Radio;