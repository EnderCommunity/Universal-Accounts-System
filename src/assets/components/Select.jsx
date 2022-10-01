/**
 * 
 * The custom <Select> element
 * 
 **/

import generalStyles from './../styles/general.module.css';

import { processProps } from './_custom.jsx';

export function Select(props){
    let basicProps = processProps(props, generalStyles.selectContainer);
    if(typeof props.id != "string"){
        throw new Error("<Select> element must always have an ID!");
    }else if(typeof props.label != "string"){
        throw new Error("<Select> element must always have a label!");
    }
    return (
        <div class={basicProps.class} style={basicProps.style}>
            <div class={generalStyles.selectDataContainer}>
                <select id={props.id} placeholder={" "}
                        autocomplete={(props.autocomplete) ? props.autocomplete : "off"}
                        class={generalStyles.selectField} required>
                    <option value="" disabled selected></option>
                    <option value="volvo">Volvo XC90</option>
                    <option value="saab">Saab 95</option>
                    <option value="mercedes">Mercedes SLK</option>
                    <option value="audi">Audi TT</option>
                </select>
                <label class={generalStyles.selectLabel} for={props.id}>{props.label}</label>
            </div>
        </div>
    );
}

export default Select;