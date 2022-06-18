import {useParams} from "react-router-dom";
import OrderButton from "../OrderButton";
import {useEffect, useState} from "react";

const ShoeSingle = () => {

    let {productId} = useParams();
    productId = productId ? parseInt(productId) : -1;

    const [shoeItem, setShoeItem] = useState([]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:3001/shoes/' + productId);

        if (!response.ok) {
            throw new Error('Data could not be fetched.');
        }
        return await response.json();
    }

    useEffect(() => {
            fetchData()
                .then((shoeData) => {
                    setShoeItem(shoeData);
                    console.log(shoeItem);
                })
                .catch((e) => {
                    console.log(e.message);
                })
        }, []
    );

    return (
        <>
        <div>
            <img src={`../../../images/${shoeItem[0].image_name}`} alt="" />
        </div>
        <div className="shoe-brand">
            <h5 className="shoe-title">{shoeItem[0].brand}</h5>
        </div>
        <ul className="model-price-list">
            <li>{shoeItem[0].model}</li>
            <li>£{shoeItem[0].price}</li>
        </ul>
        <OrderButton shoeItem={shoeItem}/>
        <h1>{productId}</h1>
        </>
    );
}

export default ShoeSingle
