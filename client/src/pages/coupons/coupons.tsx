import Coupon from "../../components/coupon/coupon.tsx";
import styles from './coupons.module.css'


const Coupons = () => {
    return (
        <div className={styles.coupons}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Coupon/>
                </li>
                <li className={styles.item}>
                    <Coupon/>
                </li>
                <li className={styles.item}>
                    <Coupon/>
                </li>
                <li className={styles.item}>
                    <Coupon/>
                </li>
                <li className={styles.item}>
                    <Coupon/>
                </li>
            </ul>
        </div>
    );
};

export default Coupons;