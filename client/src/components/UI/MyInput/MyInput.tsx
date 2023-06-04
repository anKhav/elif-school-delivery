import styles from './MyInput.module.css'
interface Props {
    type:string,
    label:string,
    placeholder:string,
    value?:string,
    required?:boolean,
    onChange?:React.ChangeEventHandler<HTMLInputElement>
}
const MyInput = ({type, label, placeholder, onChange, value, required } :Props) => {
    return (
        <>
            <label className={styles.label} htmlFor={label}>{label}</label>
            <input className={styles.input} id={label} type={type} placeholder={placeholder} onChange={onChange} value={value} required={required}/>
        </>
    );
};

export default MyInput;