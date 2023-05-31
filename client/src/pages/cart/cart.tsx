import Aside from "../../components/aside/aside.tsx";
import MyInput from "../../components/UI/MyInput/MyInput.tsx";
import styles from './cart.module.css'
import CartProductList from "../../components/cartProductList/cartProductList.tsx";
import MyButton from "../../components/UI/MyButton/MyButton.tsx";


const Cart = () => {
    return (
        <main className={styles.cart}>
            <aside className={styles.aside}>
                <Aside>
                    <form className={styles.aside__list}>
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
                    </form>
                </Aside>
            </aside>
            <section className={styles.orders}>
                <CartProductList/>
            </section>
            <section className={styles.footer}>
                <p>Total price:<span>200$</span></p>
                <MyButton label='Submit'/>
            </section>
        </main>
    );
};

export default Cart;