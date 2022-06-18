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
        },[]
    );

    return (
        <div className="single-shoe-container">
            {shoeItem.map((item, index) => {
                return (
                    <div key={index}>
                        <div>
                            <img src={`../../../images/${item.image_name}`} alt="" />
                        </div>
                        <div className="shoe-brand">
                            <h5 className="shoe-title">{item.brand}</h5>
                        </div>
                        <ul className="model-price-list">
                            <li>{item.model}</li>
                            <li>£{item.price}</li>
                        </ul>
                        {/*<OrderButton item={item}/>*/}
                        <h1>{productId}</h1>
                    </div>

                );
            })}

        </div>
    );
}

export default ShoeSingle
