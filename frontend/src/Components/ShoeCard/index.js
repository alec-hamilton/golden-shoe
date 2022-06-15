const ShoeCard = ({shoeItems}) => {

    return (
        <div className="card h-100 ">
            <div className="card-header">
                <h5 className="card-title">{item.name.common}</h5>
            </div>
            <div className="card-body">
                <img src={item.flags.svg} className="img-fluid border" alt={item.name.common}/>
            </div>
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>Capital:</strong> {item.capital}
                </li>
                <li className="list-group-item">
                    <strong>Population:</strong> {item.population}
                </li>
                <li className="list-group-item">
                    <strong>Continent:</strong> {item.continents[0]}
                </li>
            </ul>
            <div className="card-footer">
                <div className="d-grid">
                    <a className="btn btn-dark" href={item.maps.googleMaps} target="_blank">View Map</a>
                </div>
            </div>
        </div>
    );
}

export default ShoeCard;