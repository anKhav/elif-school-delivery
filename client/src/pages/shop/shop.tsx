import Aside from "../../components/aside/aside.tsx";
import ShopList from "../../components/shopList/shopList.tsx";
import SingleShop from "../singleShop/singleShop.tsx";
import styles from './shop.module.css'
import {useParams} from "react-router-dom";
import {useEffect} from "react";

const Shop = () => {
    const {id} = useParams()
    const getShops = async () =>{
        const res = await fetch('https://elif-school-delivery-production.up.railway.app/api/shop')
        console.log(res);
        return res
    }
    useEffect(() => {
        getShops()
    },[])
    return (
        <main className={styles.shop}>
            <aside className={styles.aside}>
                <Aside>
                    <ShopList/>
                </Aside>
            </aside>
            {id ? <SingleShop/> : <div>Welcome!Please select a shop!</div>}
        </main>
    );
};

export default Shop;