import styles from './MyButton.module.css'
import {MouseEventHandler} from "react";
interface Props {
    label:string,
    disabled?:boolean,
    onClick?:MouseEventHandler
}
const MyButton = ({label, disabled, onClick}:Props) => {
    return (
        <button className={styles.button} disabled={disabled} onClick={onClick}>
            {label}
        </button>
    );
};

export default MyButton;