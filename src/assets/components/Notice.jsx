/**
 * 
 * The custom <Notice> element (for text notes)
 * 
 **/

import generalStyles from './../styles/general.module.css';
 
export function Notice(props){
    let style = (props.style) ? props.style : {};
    return (
        <div class={generalStyles.notice} style={style}>
            <text>{props.children}</text>
        </div>
   );
}
 
export default Notice;