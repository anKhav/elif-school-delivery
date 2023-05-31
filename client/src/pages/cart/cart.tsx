import Aside from "../../components/aside/aside.tsx";
import MyInput from "../../components/UI/MyInput/MyInput.tsx";
import styles from './cart.module.css'


const Cart = () => {
    return (
        <main className={styles.cart}>
            <aside className={styles.aside}>
                <Aside>
                    <ul className={styles.aside__list}>
                            <li className={styles.aside__item}>
                                <MyInput type='text' label='Name:' placeholder='Name'/>
                            </li>
                           <li className={styles.aside__item}>
                               <MyInput type='email' label='Email:' placeholder='Email'/>
                           </li>
                           <li className={styles.aside__item}>
                               <MyInput type='phone' label='Phone:' placeholder='Phone'/>
                           </li>
                            <li className={styles.aside__item}>
                                <MyInput type='address' label='Address:' placeholder='Address'/>
                            </li>
                    </ul>
                </Aside>
            </aside>
        </main>
    );
};

export default Cart;