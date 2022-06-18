import {useParams} from "react-router-dom";

const ShoeSingle = () => {
    let {productId} = useParams();
    productId = productId ? parseInt(productId) : -1;

    return (
        <div>
            <h1>{productId}</h1>
        </div>
    );
}

export default ShoeSingle
