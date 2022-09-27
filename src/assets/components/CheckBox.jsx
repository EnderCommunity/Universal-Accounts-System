/**
 * 
 * The custom <CheckBox> element
 * 
 **/

import generalStyles from './../styles/general.module.css';
 
export function CheckBox(props){
    let style = (props.style != undefined) ? props.style : {},
        checkbox = (<input type="checkbox" id={props.id} class={generalStyles.checkBox} />);
    if(typeof props.id != "string"){
        throw new Error("<CheckBox> must always have an ID!");
    }else if(typeof props.onInactive != "function" || typeof props.onActive != "function"){
        throw new Error("<CheckBox> must have 'active' and 'inactive' functions!");
    }
    let rtr = (<div class={generalStyles.checkBoxContainer} style={style}>
        {checkbox}
        <label for={props.id}>{props.label}</label>
    </div>);
    // Check if the checkbox is checked
    if(checkbox.checked){
        // props.onActive();
    }else{
        // props.onInactive();
    }
    checkbox.addEventListener("change", function(){
        (checkbox.checked) ? props.onActive() : props.onInactive();
    });
    return rtr;
}
   
export default CheckBox;