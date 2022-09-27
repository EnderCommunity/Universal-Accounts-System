/**
 * 
 * The custom <Mark> element (for words highlighted with the accent colour)
 * 
 **/

import generalStyles from './../styles/general.module.css';
 
export function Mark(props){
    return (<div class={generalStyles.mark}>{props.children}</div>);
}
  
export default Mark;