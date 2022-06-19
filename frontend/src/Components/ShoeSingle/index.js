import {useParams} from "react-router-dom";
import OrderButton from "../OrderButton";
import {useEffect, useState} from "react";

const ShoeSingle = ({setCartQuantity}) => {

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
        <div>
            {shoeItem.map((item, index) => {
                return (
                    <>
                    <div key={index} className="single-shoe-container">
                        <div className="single-shoe-image">
                            <img src={`../../../images/${item.image_name}`} alt="" />
                        </div>
                        <div className="single-shoe-details">
                            <div className="shoe-brand">
                                <h5 className="shoe-title">{item.brand}</h5>
                            </div>
                            <ul className="model-price-list">
                                <li>{item.model}</li>
                                <li>£{item.price}</li>
                            </ul>
                            <OrderButton item={item} setCartQuantity={setCartQuantity}/>
                        </div>
                    </div>
                    <p className="single-shoe-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                    expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
                    quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                    quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                    molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                    maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    </>
                );
            })}
        </div>
    );
}

export default ShoeSingle
