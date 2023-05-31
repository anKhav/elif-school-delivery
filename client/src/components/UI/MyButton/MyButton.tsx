import styles from './MyButton.module.css'
interface Props {
    label:string
}
const MyButton = ({label}:Props) => {
    return (
        <button className={styles.button}>
            {label}
        </button>
    );
};

export default MyButton;