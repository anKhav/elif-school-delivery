import {ReactNode} from "react";
import styles from './aside.module.css'

interface Props {
    children: ReactNode
}
const Aside = ({children}:Props) => {
    return (
        <div className={styles.aside}>
            {children}
        </div>
    );
};

export default Aside;