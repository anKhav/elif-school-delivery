
import CartProduct from "../cartProduct/cartProduct.tsx";
import styles from './cartProductList.module.css'
import {CartProductInterface} from "../../models/cartProduct.ts";

interface Props{
    cart:CartProductInterface[]
}

const CartProductList = ({cart}:Props) => {

    return (
        <ul className={styles.order}>
            {
                cart && cart.map(product => {

                    return <CartProduct key={`order-${product.id}`} image={product.image} name={product.name} amount={product.amount} price={product.price}/>
                })
            }
        </ul>
    );
};

export default CartProductList;