import React, { useEffect, useState } from 'react';
import ProductsCard from '../components/ProductsCard';
import axios from 'axios';
import { getProducts } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';

export default function Products() {
  // const [products, setProducts] = useState([]);
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products'], () => getProducts());

  // useEffect(() => {
  //   axios
  //     .get('/data/products.json')
  //     .then(function (response) {
  //       setProducts(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  // 	getProducts().then((res) => {
  // 		console.log('res: ', res);
  // 	})
  // }, []);

  return (
    <>
      {isLoading && <p>Loading...⛱</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 mt-10">
        {products &&
          products.map((p) => <ProductsCard key={p.id} product={p} />)}
      </ul>
    </>
  );
}
