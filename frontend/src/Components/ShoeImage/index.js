const ShoeImage = ({shoeItems}) => {
    return (
        <div className="shoe-image-container">
            <img src={`../../../images/${shoeItems.image_name}`} alt=""/>
            <div className="overlay">
                <p>See more</p>
            </div>
        </div>
    );
}

export default ShoeImage;
