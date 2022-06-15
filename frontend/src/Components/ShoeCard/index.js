import OrderButton from "../OrderButton";

const ShoeCard = ({shoeItems}) => {

    return (
        <div className="card h-100 ">
            <div className="card-header">
                <h5 className="card-title">{shoeItems.brand}</h5>
            </div>
            <div className="card-body">
                <img src={`../../../images/${shoeItems.image_name}`} className="img-fluid border" alt=""/>
            </div>
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>Model:</strong> {shoeItems.model}
                </li>
                <li className="list-group-item">
                    <strong>Price:</strong> {shoeItems.price}
                </li>
            </ul>
            <div className="card-footer">
                <OrderButton shoeItems={shoeItems}/>
            </div>
        </div>
    );
}

export default ShoeCard;
