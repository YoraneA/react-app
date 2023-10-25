function ListGroup() {
    const cities = ["New York", "San Francisco", "Tokyo", "Paris"];

    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {cities.map((city) => (
                    <li key={city} className="list-group-item">{city}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
