import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';

export default function ProductDetail() {
  const {
    state: {
      product: { id, title, category, price, image, description, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {};

  return (
    <div key={id}>
      <nav className="flex">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">{category}</li>
          {/* <li className="inline-flex items-center">옷</li> */}
        </ol>
      </nav>
      <section className="flex justify-between gap-x-10 flex-col lg:flex-row p-4">
        <img className="w-full m-auto basis-6/12" src={image} alt={title} />
        <form className="w-full basis-6/12">
          <h2 className="text-3xl font-bold py-2">{title}</h2>
          <p className="text-xl py-2 border-b border-gray-400">
            {`${price.toLocaleString('ko-KR', 'currency')}원`}
          </p>
          <p className="text-lg mt-3 mb-10">{description}</p>
          <div className="flex items-center">
            {/* {options &&
              options.map((option, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="py-2.5 px-5 text-base font-medium bg-white rounded-lg flex-1 uppercase border border-gray-300 drop-shadow-lg active:bg-rose-300 focus:outline-none focus:ring focus:ring-rose-300"
                >
                  {option}
                </button>
              ))} */}
            <label htmlFor="select" className="text-rose-400 font-bold">옵션 : </label>
            <select
              name="select"
              id="select"
							className="p-2 m-4 flex-1 border-2 border-dashed border-rose-400 outline-none"
              value={selected}
              onChange={handleSelect}
            >
              {options &&
                options.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
            </select>
          </div>
          <div className="">
            <button
              type="button"
              onClick={handleClick}
              className="text-white bg-rose-400 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center  gap-x-2 inline-flex items-center justify-center mr-2 dark:bg-rose-600 dark:hover:bg-rose-400 dark:focus:ring-rose-600 w-full drop-shadow-xl"
            >
              <TiShoppingCart />
              Add to Cart
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
