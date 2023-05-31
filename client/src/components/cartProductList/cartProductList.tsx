import {orders} from "../../data/orders.ts";
import CartProduct from "../cartProduct/cartProduct.tsx";
import styles from './cartProductList.module.css'

const CartProductList = () => {
    return (
        <ul className={styles.order}>
            {
                orders.map(order => {
                    return <CartProduct key={`order-${order.id}`} image={order.image} name={order.name} amount={order.amount} price={order.price}/>
                })
            }
        </ul>
    );
};

export default CartProductList;