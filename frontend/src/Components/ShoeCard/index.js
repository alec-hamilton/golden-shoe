import OrderButton from "../OrderButton";
import ShoeImage from "../ShoeImage";

const ShoeCard = ({shoeItem}) => {

    return (
        <>
            <a href={`/products/${shoeItem.id}`}>
                <ShoeImage shoeItems={shoeItem}/>
            </a>
            <div className="shoe-brand">
                <h5 className="shoe-title">{shoeItem.brand}</h5>
            </div>
            <ul className="model-price-list">
                <li>{shoeItem.model}</li>
                <li>£{shoeItem.price}</li>
            </ul>
            <OrderButton shoeItem={shoeItem}/>
        </>
    );
}

export default ShoeCard;
