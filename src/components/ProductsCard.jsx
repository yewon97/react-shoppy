import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductsCard({ product }) {
	const {id, name, category, price} = product;
  return (
    <li>
      <Link to={`/products/${id}`}>
        <img src={`/images/${id}.webp`} alt="" />
        <div className="p-2">
          <p className="text-sm text-gray-500">{category}</p>
          <h2 className="text-base">{name}</h2>
          <p className="text-right font-bold">{price}</p>
        </div>
      </Link>
    </li>
  );
}
