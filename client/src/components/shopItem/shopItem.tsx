import styles from './shopItem.module.css'
import MyButton from "../UI/MyButton/MyButton.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {setCartProduct} from "../../store/reducers/cartSlice.ts";
interface Props {
    id:number,
    name:string,
    image:string,
    price:number,
    shopId:number
}
const ShopItem = ({id, name, image, price, shopId}:Props) => {
    const dispatch = useAppDispatch()
    const product = {
        id,
        name,
        price,
        image,
        amount:1,
        shopId
    }
    const {cart} = useAppSelector(state => state.cartReducer)
    const sameShop = cart.filter(product => product.shopId !== shopId)
    return (
        <div className={styles.product}>
            <img className={styles.image} src={`https://elif-school-delivery-production.up.railway.app/${image}`} alt=""/>
            <h4 className={styles.name}>{name}</h4>
            <span className={styles.price}>{price} $</span>
            <MyButton disabled={sameShop.length !== 0} label='Add to Cart' onClick={() => dispatch(setCartProduct(product))}/>
        </div>
    );
};

export default ShopItem;