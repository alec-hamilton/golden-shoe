import './App.css';
import React, {useEffect, useState} from 'react';
import Shoes from './Components/Shoes';
import Navbar from './Components/Navbar';
import Jumbo from "./Components/Jumbo";
import ShoeSingle from './Components/ShoeSingle';
import {Route, Switch} from "react-router-dom";
import Delivery from "./Components/Delivery";
import Returns from "./Components/Returns";
import BottomNav from "./Components/BottomNav";

function App() {

    const [shoeItems, setShoeItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);

    const fetchData = async () => {
        const response = await fetch('http://localhost:3001/shoes');

        if (!response.ok) {
            throw new Error('Data could not be fetched.');
        }

        return await response.json();
    }

    useEffect(() => {
            fetchData()
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
        <Navbar cartQuantity={cartQuantity} />
        <Switch>
            <Route exact path='/'>
                <Jumbo />
                <Shoes shoeItems={shoeItems} />
            </Route>
            <Route path={`/products/:productId`}>
                <ShoeSingle shoeItems={shoeItems} setCartQuantity={setCartQuantity} />
            </Route>
            <Route path='/delivery'>
                <Delivery />
            </Route>
            <Route path='/returns'>
                <Returns />
            </Route>
        </Switch>
        <BottomNav />
        </>
    );
}

export default App;
