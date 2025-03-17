import {useEffect, useRef, useState} from "react";
import ProductList from "./components/ProductList.tsx";

export default function App() {
  const [category, setCategory] = useState('');

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