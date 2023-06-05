
import styles from "./order.module.css";
import {Product} from "../../models/product.ts";
import {SERVER_URL} from '../../consts'
interface Props {
    products:Product[],
    userName?:string,
    totalPrice:number
}

const Order = ({products, totalPrice}:Props) => {
    return (
        <div className={styles.order}>
            <span className={styles.price}>TotalPrice:{totalPrice}$</span>
            {
                products.map(product => {
                    return (
                        <div key={`o-p-${product.id}`} className={styles.product}>
                            <div className={styles.product_content}>
                                <img className={styles.image} src={`${SERVER_URL}${product.image}`} alt={product.name}/>
                                <h3 className={styles.name}>{product.name}r</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Order;