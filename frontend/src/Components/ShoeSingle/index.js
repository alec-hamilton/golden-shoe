import {useParams} from "react-router-dom";
import OrderButton from "../OrderButton";
import {useEffect, useState} from "react";

const ShoeSingle = ({shoeItems}) => {

    let {productId} = useParams();
    productId = productId ? parseInt(productId) : -1;

    // const [shoeItems, setShoeItems] = useState([]);
    //
    // const fetchData = async () => {
    //     const response = await fetch('http://localhost:3001/shoes');
    //
    //     if (!response.ok) {
    //         throw new Error('Data could not be fetched.');
    //     }
    //
    //     return await response.json();
    // }
    //
    // useEffect(() => {
    //         fetchData()
    //             .then((shoeData) => {
    //                 setShoeItems(shoeData);
    //                 console.log(shoeItems[0].image_name);
    //             })
    //             .catch((e) => {
    //                 console.log(e.message);
    //             })
    //     }, []
    // );



    return (
        <>
        <div>
            <img src={`../../../images/${shoeItems[productId].image_name}`} alt="" />
        </div>
        <div className="shoe-brand">
            <h5 className="shoe-title">{shoeItems.brand}</h5>
        </div>
        <ul className="model-price-list">
            <li>{shoeItems.model}</li>
            <li>£{shoeItems.price}</li>
        </ul>
        <OrderButton shoeItems={shoeItems}/>
        <h1>{productId}</h1>
        </>
    );
}

export default ShoeSingle
