import {ReactNode} from "react";
import styles from './aside.module.css'

interface Props {
    children: ReactNode
}
const Aside = ({children}:Props) => {
    return (
        <aside className={styles.aside}>
            {children}
        </aside>
    );
};

export default Aside;