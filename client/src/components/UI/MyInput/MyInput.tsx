import styles from './MyInput.module.css'
interface Props {
    type:string,
    label:string,
    placeholder:string
}
const MyInput = ({type, label, placeholder } :Props) => {
    return (
        <>
            <label className={styles.label} htmlFor={label}>{label}</label>
            <input className={styles.input} id={label} type={type} placeholder={placeholder}/>
        </>
    );
};

export default MyInput;