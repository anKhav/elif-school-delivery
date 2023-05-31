import Aside from "../../components/aside/aside.tsx";
import ShopList from "../../components/shopList/shopList.tsx";
import SingleShop from "../singleShop/singleShop.tsx";
import styles from './shop.module.css'

const Shop = () => {
    return (
        <main className={styles.shop}>
            <Aside>
                <ShopList/>
            </Aside>
            <SingleShop/>
        </main>
    );
};

export default Shop;