
import ShopListItem from "../shopListItem/shopListItem.tsx";
import {shops} from '../../data/shops.ts'
import styles from './shopList.module.css'

const ShopList = () => {
    return (
        <nav className={styles.nav}>
            <h3 className={styles.title}>Shops</h3>
            <ul className={styles.list}>
                {
                    shops.map(shop => {
                        return <ShopListItem key={shop.id} name={shop.name} id={shop.id}/>
                    })
                }
            </ul>
        </nav>
    );
};

export default ShopList;