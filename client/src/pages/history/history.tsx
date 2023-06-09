import styles from './history.module.css'
import MyInput from "../../components/UI/MyInput/MyInput.tsx";
import MyButton from "../../components/UI/MyButton/MyButton.tsx";
import {shopAPI} from "../../services/ShopService.ts";
import {ReactElement, useState} from "react";
import Order from "../../components/order/order.tsx";
import {Product} from "../../models/product.ts";

interface Order {
    id:number,
    createdAt:string,
    updatedAt:string,
    shopAddress:string,
    totalPrice:number,
    userAddress:string,
    userEmail:string,
    userPhone:string,
    userName:string,
    products:Product[],
}

const History = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [data, setData] = useState('')
    const [searchByEmail, {data:dataEmail}] = shopAPI.useSearchByEmailMutation()
    const [searchByPhone, {data:dataPhone}] = shopAPI.useSearchByPhoneMutation()
    const searchByEmailHandler = async (e:React.MouseEvent<Element,MouseEvent>) => {
        e.preventDefault()
        await searchByEmail(email)
        setData('email')
    }
    const searchByPhoneHandler = async (e:React.MouseEvent<Element,MouseEvent>) => {
        e.preventDefault()
        await searchByPhone(phone)
        setData('phone')
    }
    return (
        <main className={styles.history}>
            <form className={styles.form}>
                <MyInput type='email' label='Email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <MyButton label='Search by email' onClick={(e:React.MouseEvent<Element,MouseEvent>) => searchByEmailHandler(e)}/>
            </form>
            <form className={styles.form}>
                <MyInput type='phone' label='Phone' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <MyButton label='Search by phone' onClick={(e:React.MouseEvent<Element,MouseEvent>) => searchByPhoneHandler(e)}/>
            </form>
            <section className={styles.content}>
                <ul className={styles.order__list}>
                    {
                        data === 'email' ? (
                            dataEmail && dataEmail.map((order:Order):ReactElement => {
                                return <Order totalPrice={order.totalPrice} products={order.products} userName={order.userName}/>
                            })
                        ) : (
                            dataPhone && dataPhone.map((order:Order):ReactElement => {
                                return <Order totalPrice={order.totalPrice} products={order.products} userName={order.userName}/>
                            })
                        )
                    }
                    {
                        dataEmail?.length === 0 || dataPhone?.length === 0 ? <div className={styles.not_found}>Orders not found</div>: <div></div>
                    }

                </ul>
            </section>
        </main>
    );
};

export default History;