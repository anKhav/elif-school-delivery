import styles from './coupon.module.css'
import MyButton from "../UI/MyButton/MyButton.tsx";

const Coupon = () => {
    return (
        <div className={styles.coupon}>
            <div className={styles.image}></div>
            <h3 className={styles.name}>Name</h3>
            <span className={styles.code}>sdfg3fd34</span>
            <MyButton label='Copy'/>
        </div>
    );
};

export default Coupon;