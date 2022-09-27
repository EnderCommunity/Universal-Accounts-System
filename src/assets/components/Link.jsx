/**
 * 
 * The custom <Link> element
 * 
 **/

import generalStyles from './../styles/general.module.css';
import { Link as RouterLink } from "@solidjs/router";

export function Link(props){
    return (<RouterLink href={props.href} class={generalStyles.link}>{props.children}</RouterLink>);
}

export default Link;