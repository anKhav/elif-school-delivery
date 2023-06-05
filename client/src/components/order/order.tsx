
import styles from "../../pages/history/history.module.css";
import {Product} from "../../models/product.ts";
interface Props {
    products:Product[],
    userName:string,
}

const Order = ({products, userName}:Props) => {
    return (
        <div className={styles.order}>
            <h2>{userName}</h2>
            <div className="product">
                <div className={styles.image}></div>
                <div className={styles.order__content}>
                    <h3 className={styles.name}>Big Burger</h3>
                    <span className={styles.price}>999</span>
                </div>
            </div>
            <div className="product">
                <div className={styles.image}></div>
                <div className={styles.order__content}>
                    <h3 className={styles.name}>Big Burger</h3>
                    <span className={styles.price}>999</span>
                </div>
            </div>
        </div>
    );
};

export default Order;