
import ShopListItem from "../shopListItem/shopListItem.tsx";
import styles from './shopList.module.css'
import {shopAPI} from "../../services/ShopService.ts";

const ShopList = () => {
    // const {id} = useParams()
    const {data, error, isLoading} = shopAPI.useFetchAllShopsQuery(1)
    if (error) {
        if ('status' in error) {
            const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

            return (
                <div>
                    <div>An error has occurred:</div>
                    <div>{errMsg}</div>
                </div>
            )
        }
    }
    return (
        <nav className={styles.nav}>
            <h3 className={styles.title}>Shops</h3>
            <ul className={styles.list}>
                {
                    isLoading && <div>Loading</div>
                }
                {
                    data && data.map(shop => {
                        return <ShopListItem key={shop.id} name={shop.name} id={shop.id} />
                    })
                }
            </ul>
        </nav>
    );
};

export default ShopList;