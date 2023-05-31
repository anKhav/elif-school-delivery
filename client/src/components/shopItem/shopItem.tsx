import styles from './shopItem.module.css'
import MyButton from "../UI/MyButton/MyButton.tsx";
interface Props {
    name:string,
    image:string
}
const ShopItem = ({name, image}:Props) => {
    return (
        <div className={styles.product}>
            <div className={styles.image}>{image}</div>
            <h4 className={styles.name}>{name}</h4>
            <MyButton label='Add to Cart'/>
        </div>
    );
};

export default ShopItem;