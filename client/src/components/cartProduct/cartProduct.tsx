import styles from './cartProduct.module.css'

interface Props {
    image:string,
    name:string,
    amount:number,
    price:number
}

const CartProduct = ({image, name, amount, price}: Props) => {
    return (
        <div className={styles.product}>
            <img alt={name}  src={`https://elif-school-delivery-production.up.railway.app/${image}`} className={styles.image}/>
            <div className={styles.content}>
                <h4 className={styles.name}>{name}</h4>
                <span className={styles.price}>${price}</span>
                <input className={styles.input} value={amount} type="number"/>
            </div>
        </div>
    );
};

export default CartProduct;