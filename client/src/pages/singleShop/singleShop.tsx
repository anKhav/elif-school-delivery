import {shops} from "../../data/shops.ts";
import {useParams} from "react-router-dom";
import ShopItem from "../../components/shopItem/shopItem.tsx";

const SingleShop = () => {
    const {id} = useParams()
    console.log(id);
    const shop = shops.find(shop => shop.id === +id)
    return (
        <div>
            {
                shop?.menu.map(product => {
                    return <ShopItem key={product.id} name={product.name} image={product.image}/>
                })
            }
        </div>
    );
};

export default SingleShop;