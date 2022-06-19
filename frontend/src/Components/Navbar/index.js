import NormalNavigation from "./NormalNavigation";
import MobileNavigation from "./MobileNavigation";

const Navbar = ({cartQuantity}) => {
    return (
        <div className="top-nav-container">
            <a href="/" className="logo-link"><h1 className="logo">GoldenShoe</h1></a>
            <NormalNavigation cartQuantity={cartQuantity} />
            <MobileNavigation cartQuantity={cartQuantity} />
        </div>
    );
}

export default Navbar;
