import {useParams} from "react-router-dom";
import ShopItem from "../../components/shopItem/shopItem.tsx";
import styles from './singleShop.module.css'
import {shopAPI} from "../../services/ShopService.ts";

const SingleShop = () => {
    const {id} = useParams()
    const {data} = shopAPI.useFetchShopProductsQuery(Number(id))
    return (
        <div className={styles.shop}>
            {
                data && data.products.map(product => {
                    return <ShopItem key={product.id} name={product.name} image={product.image} price={product.price}/>
                })
            }
        </div>
    );
};

export default SingleShop;