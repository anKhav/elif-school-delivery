import Aside from "../../components/aside/aside.tsx";
import ShopList from "../../components/shopList/shopList.tsx";
import SingleShop from "../singleShop/singleShop.tsx";
import styles from './shop.module.css'
import {useParams} from "react-router-dom";

const Shop = () => {
    const {id} = useParams()
    return (
        <main className={styles.shop}>
            <aside className={styles.aside}>
                <Aside>
                    <ShopList/>
                </Aside>
            </aside>
            {id ? <SingleShop/> : <div className={styles.default}>Welcome!Please select a shop!</div>}
        </main>
    );
};

export default Shop;