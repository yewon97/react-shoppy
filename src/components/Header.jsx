import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiTwotoneShop } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';
import { HiPencilAlt } from 'react-icons/hi';
import {
  login,
  logout,
  onUserStateChange,
} from '../api/firebase';
import User from './User';

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <header className="border-b-2 sticky top-0 left-0 right-0 h-20 bg-white">
      <section className="flex items-center justify-between max-w-screen-xl mx-auto h-full px-10">
        <h1>
          <Link to="/" className="flex items-center gap-x-3">
            <AiTwotoneShop className="text-brand text-4xl text-rose-400" />
            <span className="text-rose-400 text-3xl font-bold font-pacifico">
              Shoppy
            </span>
          </Link>
        </h1>

        <nav>
          <ul className="flex items-center gap-x-4">
            <li>
              <Link
                to={'/products'}
                className="text-lg font-bold text-gray-900 hover:text-rose-400"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to={'/cart'}
                className="hover:text-rose-400 text-3xl text-gray-900 relative"
              >
                <TiShoppingCart />
                <span className="inline-flex items-center justify-center px-1 py-0.5 text-white bg-red-500  rounded-full absolute -translate-y-1/2 translate-x-1/2 left-auto top-0 right-0 text-xs font-medium leading-none">
                  8
                </span>
              </Link>
            </li>
            {user?.isAdmin && (
              <li>
                <Link
                  to={'/admin'}
                  className="hover:text-rose-400 text-3xl text-gray-900 relative"
                >
                  <HiPencilAlt />
                </Link>
              </li>
            )}
            {user && (
              <li>
                <User user={user} />
              </li>
            )}
            <li>
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-lg text-sm px-5 py-2.5 text-center font-bold"
                onClick={user ? logout : login}
              >
                {user ? 'Logout' : 'Login'}
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
