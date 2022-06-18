import './App.css';
import React, {useEffect, useState} from 'react';
import Shoes from './Components/Shoes';
import Navbar from './Components/Navbar';
import Jumbo from "./Components/Jumbo";
import ShoeSingle from './Components/ShoeSingle';
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";

function App() {

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
        <>
        <Navbar />
        <Switch>
            <Route exact path='/'>
                <Jumbo />
                <Shoes shoeItems={shoeItems}/>
            </Route>
            <Route path={`/products/:productId`}>
                <ShoeSingle />
            </Route>
        </Switch>
        </>
    );
}

export default App;
