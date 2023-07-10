import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { useAuthContext } from '../context/AuthContext';
import { addOrUpdateToCart } from '../api/firebase';

export default function ProductDetail() {
  const { uid } = useAuthContext();

  const {
    state: {
      product: {
        id,
        title,
        category,
        price,
        image,
        description,
        options,
        colors,
      },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);
  const [selcolor, setSelcolor] = useState(colors && colors[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = {
      id,
      image,
      title,
      price,
      option: selected,
      color: selcolor,
      quantity: 1,
    };
    addOrUpdateToCart(uid, product);
  };
  const handleChange = (e) => setSelcolor(e.target.value);

  return (
    <div key={id}>
      <nav className="flex px-4 pt-4">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 text-gray-500">
          <li className="inline-flex items-center">{category}</li>
          {/* <li className="inline-flex items-center">옷</li> */}
        </ol>
      </nav>
      <section className="flex justify-between gap-x-10 flex-col lg:flex-row p-4">
        <img className="w-full m-auto basis-6/12" src={image} alt={title} />
        <form className="w-full basis-6/12">
          <h2 className="text-3xl font-bold py-2">{title}</h2>
          <p className="text-xl py-2 border-b border-'gray-400">
            {`${price.toLocaleString('ko-KR', 'currency')}원`}
          </p>
          <p className="text-lg mt-3 mb-10">{description}</p>
          <div className="flex items-center">
            <span className="text-rose-400 font-bold">색상 : </span>
            <ul className="flex gap-3 items-center m-4">
              {colors &&
                colors.map((color, idx) => (
                  <li
                    key={idx}
                    className={`${
                      selcolor === color
                        ? 'outline-dashed outline-2 outline-rose-400'
                        : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="colorChip"
                      id={`colorChip${idx}`}
                      value={color}
                      className={`sr-only peer/colorChip${idx}`}
                      onChange={handleChange}
                      checked={selcolor === color}
                    />
                    <label
                      htmlFor={`colorChip${idx}`}
                      className={`rounded-full border-4 border-gray-300 drop-shadow-lg w-10 h-10 cursor-pointer inline-block flex items-center justify-center`}
                      style={{ backgroundColor: color }}
                    ></label>
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex items-center">
            <label htmlFor="select" className="text-rose-400 font-bold">
              옵션 :{' '}
            </label>
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
