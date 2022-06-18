import ShoeCard from '../ShoeCard';

const Shoes = ({shoeItems}) => {

    return (
        <div className="container">
            {shoeItems.map((shoeItem, index) => {
                    return (
                        <div className="shoe-container" key={index}>
                            <ShoeCard shoeItem={shoeItem} />
                        </div>
                    );
                }
            )}
        </div>
    );
}

export default Shoes;
