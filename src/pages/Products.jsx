import React, { useEffect, useState } from 'react';
import ProductsCard from '../components/ProductsCard';
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('/data/products.json')
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ul className="grid grid-cols-4 gap-x-4 gap-y-10 mt-10">
      {products.map((p) => (
        <ProductsCard key={p.id} product={p} />
      ))}
    </ul>
  );
}
