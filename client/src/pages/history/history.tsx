import styles from './history.module.css'
import MyInput from "../../components/UI/MyInput/MyInput.tsx";
import MyButton from "../../components/UI/MyButton/MyButton.tsx";
import {shopAPI} from "../../services/ShopService.ts";
import {useState} from "react";

const History = () => {
    const [email, setEmail] = useState('')
    const [searchByEmail, {error, isLoading}] = shopAPI.useSearchByEmailMutation()
    const search = async (e) => {
        e.preventDefault()
        await searchByEmail(email)

    }
    return (
        <main className={styles.history}>
            <form>
                <MyInput type='email' label='Email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <MyButton label='Search by email' onClick={(e) => search(e)}/>
                <MyInput type='phone' label='Phone' placeholder='Phone'/>
            </form>
            <section className={styles.content}>
                <ul className={styles.order__list}>
                    <div className={styles.order}>
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
                </ul>
                <h2 className={styles.totalPrice}>999</h2>
            </section>
        </main>
    );
};

export default History;