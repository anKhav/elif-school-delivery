import styles from './shopListItem.module.css'
import {NavLink} from "react-router-dom";
// @ts-ignore
import {makeRightUrlStr} from "../../utils/functions.js"
import {useAppSelector} from "../../hooks/redux.ts";
interface Props {
    name:string,
    id:number
}
const ShopListItem = ({name, id}:Props) => {

    return (
        <NavLink className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.shop}` : styles.shop
        } to={id.toString()}>
            <span className={styles.name}>{name}</span>
        </NavLink>
    );
};

export default ShopListItem;