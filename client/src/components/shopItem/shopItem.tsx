import styles from './shopItem.module.css'
import MyButton from "../UI/MyButton/MyButton.tsx";
import {useAppDispatch} from "../../hooks/redux.ts";
import {setCartProduct} from "../../store/reducers/cartSlice.ts";
interface Props {
    name:string,
    image:string,
    price:number
}
const ShopItem = ({name, image, price}:Props) => {
    const dispatch = useAppDispatch()
    const product = {
        name,
        price,
        image,
        amount:1
    }
    console.log(product);
    return (
        <div className={styles.product}>
            <img className={styles.image} src={`https://elif-school-delivery-production.up.railway.app/${image}`} alt=""/>
            <h4 className={styles.name}>{name}</h4>
            <span>{price}</span>
            <MyButton label='Add to Cart' onClick={() => dispatch(setCartProduct(product))}/>
        </div>
    );
};

export default ShopItem;