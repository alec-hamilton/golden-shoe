const ViewDetailButton = ({shoeItem}) => {
    return (
        <button onClick={(event) => {
            event.preventDefault();
            window.location.href='/products/' + shoeItem.id;
        }}>View details</button>
    );
}

export default ViewDetailButton;
