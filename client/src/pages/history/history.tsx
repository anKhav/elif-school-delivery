import styles from './history.module.css'
import MyInput from "../../components/UI/MyInput/MyInput.tsx";
import MyButton from "../../components/UI/MyButton/MyButton.tsx";
import {shopAPI} from "../../services/ShopService.ts";
import {useState} from "react";
import Order from "../../components/order/order.tsx";

const History = () => {
    const [email, setEmail] = useState('')
    const [searchByEmail, {error, isLoading, data}] = shopAPI.useSearchByEmailMutation()
    const search = async (e) => {
        e.preventDefault()
        await searchByEmail(email)

    }
    console.log(data);
    return (
        <main className={styles.history}>
            <form>
                <MyInput type='email' label='Email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <MyButton label='Search by email' onClick={(e) => search(e)}/>
                <MyInput type='phone' label='Phone' placeholder='Phone'/>
            </form>
            <section className={styles.content}>
                <ul className={styles.order__list}>
                    {
                        data && data.map(order => {
                            return <Order products={order.products} userName={order.userName}/>
                        })
                    }
                </ul>
                <h2 className={styles.totalPrice}>999</h2>
            </section>
        </main>
    );
};

export default History;