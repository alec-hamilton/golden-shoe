const Navbar = ({cartQuantity}) => {
    return (
        <nav className="top-nav">
            <a href='/'><h1 className="logo">GoldenShoe</h1></a>
            <ul className="top-nav-links">
                <a href="/delivery"><li>Delivery</li></a>
                <a href="/returns"><li>Returns</li></a>
                <a href="#"><li>Cart ({cartQuantity})</li></a>
            </ul>
        </nav>
    );
}

export default Navbar;
