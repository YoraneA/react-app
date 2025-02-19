export default function ListGroup() {
  let items = [
    'New York',
    'London',
    'Paris',
  ];

  const showItems = items.map(item =>
    <li
      className="list-group-item"
      key={item}
    >
      {item}
    </li>
  );

  return (
    <>
      <h1>List</h1>
      { items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {showItems}
      </ul>
    </>
  );
}
