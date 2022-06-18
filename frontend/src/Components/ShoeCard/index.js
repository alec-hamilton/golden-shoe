import OrderButton from "../OrderButton";
import ShoeImage from "../ShoeImage";

const ShoeCard = ({shoeItems}) => {

    return (
        <div className="shoe-container">
            <a href={`/products/${shoeItems.id}`}>
                <ShoeImage shoeItems={shoeItems}/>
            </a>
            <div className="shoe-brand">
                <h5 className="shoe-title">{shoeItems.brand}</h5>
            </div>
            <ul className="model-price-list">
                <li>{shoeItems.model}</li>
                <li>£{shoeItems.price}</li>
            </ul>
            <OrderButton shoeItems={shoeItems}/>
        </div>
    );
}

export default ShoeCard;
