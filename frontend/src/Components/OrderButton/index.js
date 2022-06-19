const OrderButton = ({item, setCartQuantity}) => {

    const addToCart = () => {
        setCartQuantity((prevClickCount) => {
            return prevClickCount + 1;
        });
    }

    let disabled = '';

    if (!item.stock) {
        disabled = 'disabled';
    }

    let isDisabled = {disabled};

    return (
        <button {...isDisabled} onClick={addToCart}>Add to cart</button>
    );
}

export default OrderButton;
