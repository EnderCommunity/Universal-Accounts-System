/**
 * 
 * The custom <Button> element
 * 
 **/

import generalStyles from './../styles/general.module.css';
import { Link } from "@solidjs/router";

// <Button type="link" href="/"></Button>
// <Button type="action" function={<function>}></Button>
// <Button ... primary></Button>
export function Button(props){
    let style = `${((props.primary) ?
                    `${generalStyles.button} ${generalStyles.primarybutton}` :
                    generalStyles.button)}${
                (props.light) ?
                    " " + generalStyles.lightButton :
                    ""}${
                (props.class) ?
                    " " + props.class :
                    ""}`;
    if(props.type == "link"){
        return (<Link href={props.href} class={style}>{props.children}</Link>);
    }else if(props.type == "action"){
        return (<button onClick={props.function} class={style}>{props.children}</button>);
    }else if(props.type != undefined){
        throw new Error("Invalid <Button> type!");
    }else{
        // return "action-less" button
        return (<button class={style}>{props.children}</button>);
    }
}

export default Button;