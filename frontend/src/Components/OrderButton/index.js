let disabled;

const OrderButton = ({shoeItems}) => {

    let isDisabled = {disabled};

    if (shoeItems.stock !== 0) {
        disabled = '';
    } else {
        disabled = 'disabled';
    }

    return (
        <button className="" {...isDisabled}>Add to cart</button>
    );
}

export default OrderButton;
