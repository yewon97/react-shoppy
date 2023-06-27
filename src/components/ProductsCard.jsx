import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductsCard({
	product,
  product: { id, title, category, price, image },
}) {
  return (
    <li className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105">
      <Link to={`/products/${id}`} state={{ product }}>
        <img src={image} alt={title} className="m-auto w-full" />
        <div className="p-2">
          <p className="text-sm text-gray-500">{category}</p>
          <h3 className="text-base truncate">{title}</h3>
          <p className="text-right font-bold">
            {`${price.toLocaleString('ko-KR', 'currency')}원`}
          </p>
        </div>
      </Link>
    </li>
  );
}
