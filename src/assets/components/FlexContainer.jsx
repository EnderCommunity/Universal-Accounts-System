/**
 * 
 * The custom <FlexContainer> element
 * 
 **/

import generalStyles from './../styles/general.module.css';
 
export function FlexContainer(props){
    let style = (props.style) ? props.style : {},
        className = `${((props.space == "around" || props.space == "between") ? `${generalStyles.flexContainer} ${(
            (props.space == "around") ? generalStyles.spaceAround : generalStyles.spaceBetween
        )}` : generalStyles.flexContainer)}${props.class ? " " + props.class : ""}`;
    return (
        <div class={`${className}${(props.horozontal) ? " " + generalStyles.horozontal : ""}${props["no-grow"] ? " " + generalStyles.noFlexGrow : ""}`} style={style}>{props.children}</div>
    );
}
 
export default FlexContainer;