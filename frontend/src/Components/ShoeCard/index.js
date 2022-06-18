import OrderButton from "../OrderButton";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import ShoeImage from "../ShoeImage";

const ShoeCard = ({shoeItems}) => {

    return (
        <div className="shoe-container">
                    <ShoeImage shoeItems={shoeItems}/>
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
