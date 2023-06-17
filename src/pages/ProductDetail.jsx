import React from 'react';
import { useParams } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';

export default function ProductDetail() {
  const { productId } = useParams();

  return (
    <div>
      <nav className="flex">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">여성복</li>
          <li className="inline-flex items-center">옷</li>
        </ol>
      </nav>
      <div className="flex justify-between gap-x-10">
        <img className="max-w-2xl" src={`/images/${productId}.webp`} alt="" />
        <form className="flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">basic tee</h2>
            <p className="text-xl">1,000,000원</p>
          </div>
					<p className="text-xl mt-3 mb-10">
						설명입니다.
					</p>
          <div className="flex gap-2 mt-4">
            {['xs', 'x', 'm', 'l', 'xl'].map((size) => (
              <button
                type="button"
                className="py-2.5 px-5 text-base font-medium bg-white rounded-lg flex-1 uppercase border border-gray-300 drop-shadow-lg active:bg-rose-300 focus:outline-none focus:ring focus:ring-rose-300"
              >
                {size}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <button
              type="button"
              class="text-white bg-rose-400 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center  gap-x-2 inline-flex items-center justify-center mr-2 dark:bg-rose-600 dark:hover:bg-rose-400 dark:focus:ring-rose-600 w-full drop-shadow-xl"
            >
              <TiShoppingCart />
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
