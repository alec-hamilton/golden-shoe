import NavLinks from "../NavLinks";

const NormalNavigation = ({cartQuantity}) => {
    return (
        <nav className="normal-navigation">
            <NavLinks cartQuantity={cartQuantity} />
        </nav>
    );
}

export default NormalNavigation;
