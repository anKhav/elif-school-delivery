import Aside from "../../components/aside/aside.tsx";
import MyInput from "../../components/UI/MyInput/MyInput.tsx";
import styles from './cart.module.css'
import CartProductList from "../../components/cartProductList/cartProductList.tsx";
import MyButton from "../../components/UI/MyButton/MyButton.tsx";
import {useAppSelector} from "../../hooks/redux.ts";
import {SetStateAction, useState} from "react";

interface formData {
    userName:string,
    userEmail:string,
    userPhone:string,
    userAddress:string
}
// interface formState {
//     formData
//     setFormData:React.Dispatch<SetStateAction<any>>
// }


const Cart = () => {
    const {cart, totalPrice} = useAppSelector(state => state.cartReducer)
    const [formData, setFormData] = useState<formData>({
        userName:'',
        userEmail:'',
        userPhone:'',
        userAddress:''
    })
    const order = {
        products:[...cart],
        ...formData,
        shopAddress:'Kyiv 2',
        totalPrice:200
    }
    console.log(order);
    const sendOrder = async (data) => {
        fetch('https://elif-school-delivery-production.up.railway.app/api/order', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    return (
        <main className={styles.cart}>
            <aside className={styles.aside}>
                <Aside>
                    <form className={styles.aside__list}>
                            <li className={styles.aside__item}>
                                <MyInput onChange={(e:React.ChangeEvent) => setFormData({...formData, userName:e.target.value})} value={formData.userName} type='text' label='Name:' placeholder='Name'/>
                            </li>
                           <li className={styles.aside__item}>
                               <MyInput onChange={(e:React.ChangeEvent) => setFormData({...formData, userEmail:e.target.value})} type='email' value={formData.userEmail} label='Email:' placeholder='Email'/>
                           </li>
                           <li className={styles.aside__item}>
                               <MyInput onChange={(e:React.ChangeEvent) => setFormData({...formData, userPhone:e.target.value})} type='phone' value={formData.userPhone} label='Phone:' placeholder='Phone'/>
                           </li>
                            <li className={styles.aside__item}>
                                <MyInput onChange={(e:React.ChangeEvent) => setFormData({...formData, userAddress:e.target.value})} type='address' value={formData.userAddress} label='Address:' placeholder='Address'/>
                            </li>
                    </form>
                </Aside>
            </aside>
            <section className={styles.orders}>
                {cart.length !==0 ? <CartProductList cart={cart}/> : <div>Cart is empty</div>}
            </section>
            <section className={styles.footer}>
                <p>Total price:<span>{totalPrice}$</span></p>
                <MyButton label='Submit' disabled={cart.length ===0} onClick={() => sendOrder(order)}/>
            </section>
        </main>
    );
};

export default Cart;