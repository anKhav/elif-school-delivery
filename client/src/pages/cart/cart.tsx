import Aside from "../../components/aside/aside.tsx";
import MyInput from "../../components/UI/MyInput/MyInput.tsx";
import styles from './cart.module.css'
import CartProductList from "../../components/cartProductList/cartProductList.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {useEffect, useState} from "react";
import {shopAPI} from "../../services/ShopService.ts";
import {clearCart} from "../../store/reducers/cartSlice.ts";

interface formData {
    userName:string,
    userEmail:string,
    userPhone:string,
    userAddress:string
}
const Cart = () => {
    const {cart, totalPrice} = useAppSelector(state => state.cartReducer)
    useEffect(() => {

    }, [cart])
    const dispatch = useAppDispatch()
    const [createOrder,{isLoading, isSuccess}] = shopAPI.useCreateOrderMutation()
    const initialState = {
        userName:'',
        userEmail:'',
        userPhone:'',
        userAddress:''
    }
    const [formData, setFormData] = useState<formData>(initialState)
    useEffect(() => {
        isSuccess && dispatch(clearCart())
        isSuccess && setFormData(initialState)
    }, [isSuccess])
    const order = {
        products:[...cart],
        shopAddress:'Kyiv 2',
        totalPrice:200,
        ...formData
    }

    const isEmpty = Object.values(formData).every(x => x === null || x === '');
    const orderHandler = async (e:React.EventHandler) => {
        e.preventDefault()
        await createOrder(order)
    }
    return (
        <main className={styles.cart}>
            <aside className={styles.aside}>
                <Aside>
                    <form onSubmit={(e) => orderHandler(e)} className={styles.aside__list}>
                            <li className={styles.aside__item}>
                                <MyInput required={true} onChange={(e:React.ChangeEvent) => setFormData({...formData, userName:e.target.value})} value={formData.userName} type='text' label='Name:' placeholder='Name'/>
                            </li>
                           <li className={styles.aside__item}>
                               <MyInput required={true} onChange={(e:React.ChangeEvent) => setFormData({...formData, userEmail:e.target.value})} type='email' value={formData.userEmail} label='Email:' placeholder='Email'/>
                           </li>
                           <li className={styles.aside__item}>
                               <MyInput required={true} onChange={(e:React.ChangeEvent) => setFormData({...formData, userPhone:e.target.value})} type='phone' value={formData.userPhone} label='Phone:' placeholder='Phone'/>
                           </li>
                            <li className={styles.aside__item}>
                                <MyInput required={true} onChange={(e:React.ChangeEvent) => setFormData({...formData, userAddress:e.target.value})} type='address' value={formData.userAddress} label='Address:' placeholder='Address'/>
                            </li>
                        <input className={styles.display_none} id='submit-cart' type="submit" disabled={cart.length ===0} value='Submit'/>
                    </form>
                </Aside>
            </aside>
            <section className={styles.orders}>
                {cart.length !==0 ? <CartProductList cart={cart}/> : <div className={styles.empty}>Cart is empty</div>}
            </section>
            <section className={styles.footer}>
                <p>Total price:<span>{totalPrice}$</span></p>
                <label htmlFor="submit-cart" onClick={(e) => {(e) => orderHandler(e)}} className={`${styles.button} ${cart.length ===0 && styles.disabled} ${isEmpty && styles.disabled}`}>
                    {
                        isLoading ? 'Loading...' : 'Submit'
                    }
                </label>
            </section>
            <div className={`${styles.notification} ${isSuccess && styles.notification_active }`}>
                Order is placed!
            </div>
        </main>
    );
};

export default Cart;