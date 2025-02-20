import ListGroup from "./components/ListGroup.tsx";
import {useState} from "react";

export default function App() {
  let items = [
    'New York',
    'London',
    'Paris',
  ];

  const onSelectItem = (item: string) => console.log(item);

  return <div>
    <ListGroup
      items={items}
      header={'Cities'}
      handleClickItem={onSelectItem}
    />
  </div>;
}