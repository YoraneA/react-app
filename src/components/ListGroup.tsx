import { useState } from "react";

interface ListGroupData {
    header: string,
    items: Array<string>,
    onSelectedItem: (item: string) => void
}

function ListGroup({header, items, onSelectedItem}: ListGroupData) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{header}</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={item}
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        onClick={() => onSelectedItem(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
