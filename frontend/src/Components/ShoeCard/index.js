import OrderButton from "../OrderButton";

const ShoeCard = ({shoeItems}) => {

    return (
        <div className="shoe-container">
            <div className="shoe-image-container">
                <img src={`../../../images/${shoeItems.image_name}`} alt=""/>
            </div>
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
