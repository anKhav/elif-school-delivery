import styles from './cartProduct.module.css'
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {
    decrementProductAmount,
    incrementProductAmount,
    setProductAmount
} from "../../store/reducers/cartSlice.ts";
import {SERVER_URL} from "../../consts.ts";

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
    const [value, setValue] = useState(Number(item?.amount))
    useEffect(() => {

    },[cart])
    const handler = (e:React.FormEvent<HTMLInputElement>) => {
        const target = e.currentTarget
        if (+target.value > 20){
            setValue(20)
        } else if (+target.value < 0 ){
            setValue(1)
        } else {
            setValue(+target.value)
        }
        dispatch(setProductAmount({name,amount:+target.value}))
    }
    const increment = (e:React.MouseEvent) => {
        e.preventDefault()
        setValue(prev => prev + 1)
        dispatch(incrementProductAmount({name}))
    }
    const decrement = (e:React.MouseEvent) => {
        e.preventDefault()
        setValue(prev => prev - 1)
        dispatch(decrementProductAmount({name}))
    }

    return (
        <div className={styles.product}>
            <img alt={name}  src={`${SERVER_URL}${image}`} className={styles.image}/>
            <div className={styles.content}>
                <h4 className={styles.name}>{name}</h4>
                <span className={styles.price}>${price}</span>
                <div className={styles.amount_wrapper}>
                    <button disabled={value === 1} onClick={(e) => decrement(e)} className={`${styles.amount_button} ${styles.amount_button_dec}`}>-</button>
                    <input onChange={(e) => handler(e)}  className={styles.input} value={value} type="number"/>
                    <button disabled={value === 20} onClick={(e) => increment(e)} className={`${styles.amount_button} ${styles.amount_button_inc}`}>+</button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;