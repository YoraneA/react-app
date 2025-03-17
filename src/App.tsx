import {useEffect, useRef, useState} from "react";
import ProductList from "./components/ProductList.tsx";

const connect = () => console.log('Connecting to server...');
const disconnect = () => console.log('Disconnecting from server...');

export default function App() {
  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  return (
    <>
      <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
      </select>
      <ProductList category={category} />
    </>
  );
}