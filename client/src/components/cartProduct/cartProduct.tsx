import styles from './cartProduct.module.css'
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {
    decrementProductAmount,
    incrementProductAmount,
    setCardProductQuantity, setProductAmount
} from "../../store/reducers/cartSlice.ts";

interface Props {
    image:string,
    name:string,
    amount?:number,
    price:number
}

const CartProduct = ({image, name, price}: Props) => {
    const dispatch = useAppDispatch()
    const {cart} = useAppSelector(state => state.cartReducer)
    const item = cart.find(product => product.name === name)
    const [value, setValue] = useState(Number(item.amount))
    useEffect(() => {

    },[cart])
    const handler = (e) => {
        setValue(e.target.value)
        dispatch(setProductAmount({name,amount:+e.target.value}))
    }
    const increment = (e) => {
        e.preventDefault()
        setValue(prev => prev + 1)
        dispatch(incrementProductAmount({name}))
    }
    const decrement = (e) => {
        e.preventDefault()
        setValue(prev => prev - 1)
        dispatch(decrementProductAmount({name}))
    }

    return (
        <div className={styles.product}>
            <img alt={name}  src={`https://elif-school-delivery-production.up.railway.app/${image}`} className={styles.image}/>
            <div className={styles.content}>
                <h4 className={styles.name}>{name}</h4>
                <span className={styles.price}>${price}</span>
                <div className={styles.amount_wrapper}>
                    <button onClick={(e) => decrement(e)} className={`${styles.amount_button} ${styles.amount_button_dec}`}>-</button>
                    <input onChange={(e) => handler(e)}  className={styles.input} value={value} type="number"/>
                    <button onClick={(e) => increment(e)} className={`${styles.amount_button} ${styles.amount_button_inc}`}>+</button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;