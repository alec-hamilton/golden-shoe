import {useEffect, useState} from 'react';
import ShoeCard from '../ShoeCard';

const Shoes = () => {
    const [shoeItems, setShoeItems] = useState([]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:3001/shoes');

        if (!response.ok) {
            throw new Error('Data could not be fetched.');
        }

        return await response.json();
    }

    useEffect(() => {
            fetchData()         // when the data from fetchData() comes back, put it into countryItems.
                .then((shoeData) => {
                    setShoeItems(shoeData);
                })
                .catch((e) => {
                    console.log(e.message);
                })
        }, []
    );

    return (
        <div className="row">
            {shoeItems.map((shoeItems, index) => {
                    return (
                        <div className="col-6 col-sm-4 mb-3 col-md-3 col-lg-2" key={index}>
                            <ShoeCard shoeItems={shoeItems} />
                        </div>
                    );
                }
            )}
        </div>
    );
}

export default Shoes;
