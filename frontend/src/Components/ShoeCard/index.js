import ShoeImage from "../ShoeImage";
import ViewDetailButton from "../ViewDetailButton";

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
            <ViewDetailButton shoeItem={shoeItem}/>
        </>
    );
}

export default ShoeCard;
