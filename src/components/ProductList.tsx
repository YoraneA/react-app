import {useEffect, useState} from "react";

export default function ProductList({category}: {category: string}) {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log('Fetching products in', category);
    setProducts(['Clothing', 'Electronics', 'Books']);
  }, [category])

  return (
    <div>
      <h2>Products</h2>
    </div>
  )
}

