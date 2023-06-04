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
                    return <ShopItem id={product.id} key={product.id} name={product.name} image={product.image} price={product.price} shopId={Number(id)}/>
                })
            }
        </div>
    );
};

export default SingleShop;