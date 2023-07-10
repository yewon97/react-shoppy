import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { getCart } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(['carts'], () => getCart(uid));

  return (
    <>
      <TiShoppingCart />
      <span className="inline-flex items-center justify-center px-1 py-0.5 text-white bg-red-500 rounded-full absolute -translate-y-1/2 translate-x-1/2 left-auto top-0 right-0 text-xs font-medium leading-none">
        {products && products.length}
      </span>
    </>
  );
}
