const NavLinks = ({cartQuantity}) => {
    return (
        <ul className="top-nav-links">
            <a href="/delivery"><li>Delivery</li></a>
            <a href="/returns"><li>Returns</li></a>
            <a href="#"><li>Cart ({cartQuantity})</li></a>
        </ul>
    );
}

export default NavLinks;
