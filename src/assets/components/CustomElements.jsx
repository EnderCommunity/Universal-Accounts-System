/**
 * 
 * Collect all the "normal" custom <element> components in one file
 * 
 **/

import generalStyles from './../styles/general.module.css';

import { Link } from './Link.jsx';
import { Button } from './Button.jsx';
import { Input, setInputState } from './Input.jsx';
import { Select } from './Select.jsx';
import { Notice } from './Notice.jsx';
import { Mark } from './Mark.jsx';
import { FlexContainer } from './FlexContainer.jsx';
import { CheckBox } from './CheckBox.jsx';
import { Radio } from './Radio.jsx';
import { Dialog, setDialogState, showDialog } from './Dialog.jsx';

export function Divider(){
    return <hr class={generalStyles.divider}/>
}

export {
    Input,
    setInputState,

    Dialog,
    setDialogState,
    showDialog,

    Link,
    Button,
    Select,
    Notice,
    Mark,
    FlexContainer,
    CheckBox,
    Radio
};