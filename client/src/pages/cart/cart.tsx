import Aside from "../../components/aside/aside.tsx";
import MyInput from "../../components/UI/MyInput/MyInput.tsx";
import styles from './cart.module.css'
import CartProductList from "../../components/cartProductList/cartProductList.tsx";
import MyButton from "../../components/UI/MyButton/MyButton.tsx";
import {useAppSelector} from "../../hooks/redux.ts";
import {SetStateAction, useState} from "react";
import axios from "axios";

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
        shopAddress:'Kyiv 2',
        totalPrice:200,
        ...formData
    }
    console.log(JSON.stringify(order));
    const mock = {
        "products":[
            {
                "id": 2,
                "name": "ChickenBurger",
                "image": "f708739e-52a2-4974-b554-3a8e6caeddb6.jpg",
                "price": 3,
                "shopId": 2
            },
            {
                "id": 4,
                "name": "Cola",
                "image": "ef76c230-5778-48d3-b31a-5e9955a3f8e0.jpg",
                "price": 5,
                "shopId": 2
            }
        ],
        "userName": "Nick",
        "userEmail":"g",
        "userPhone": "+3",
        "userAddress":"Kyiv 1",
        "shopAddress":"Kyiv 2",
        "totalPrice":200
    }
    console.log(JSON.stringify(mock));
    const sendOrder = async (datas) => {
        const res = await axios.post('https://elif-school-delivery-production.up.railway.app/api/order',{datas})
        const data = await res.data
        console.log(data);
        return data
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