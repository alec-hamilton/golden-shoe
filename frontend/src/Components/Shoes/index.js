import ShoeCard from '../ShoeCard';

const Shoes = ({shoeItems}) => {


    return (
        <div className="container">
            {shoeItems.map((shoeItems, index) => {
                    return (
                        <ShoeCard shoeItems={shoeItems} key={index}/>
                    );
                }
            )}
        </div>
    );
}

export default Shoes;
