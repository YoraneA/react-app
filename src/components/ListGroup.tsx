import {useState} from "react";

export default function ListGroup({items, header, handleClickItem}: Props) {
  const [selectedItem, setSelectedItem] = useState(-1);

  const showItems = items.map((item, index) =>
    <li
      className={`list-group-item ${selectedItem === index ? 'active' : ''}`}
      key={index}
      onClick={() => {
        setSelectedItem(index);
        handleClickItem(item);
      }}
    >
      {item}
    </li>
  );

  return (
    <>
      <h1>{header}</h1>
      { items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {showItems}
      </ul>
    </>
  );
}

interface Props {
  items: string[],
  header: string,
  handleClickItem: (item: string) => void
}