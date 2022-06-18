const OrderButton = ({shoeItem}) => {

    let disabled = '';

    if (!shoeItem.stock) {
        disabled = 'disabled';
    }

    let isDisabled = {disabled};

    return (
        <button {...isDisabled}>Add to cart</button>
    );
}

export default OrderButton;
