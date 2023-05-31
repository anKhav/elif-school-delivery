
interface Props {
    name:string,
    image:string
}
const ShopItem = ({name, image}:Props) => {
    return (
        <div>
            <h4>{name}</h4>
            <div>{image}</div>
        </div>
    );
};

export default ShopItem;