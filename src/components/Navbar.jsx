import React from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneShop } from 'react-icons/ai';
import { HiPencilAlt } from 'react-icons/hi';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="border-b-2 fixed top-0 left-0 right-0 h-20 bg-white z-10">
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
            {user && (
              <li>
                <Link
                  to={'/cart'}
                  className="hover:text-rose-400 text-3xl text-gray-900 relative"
                >
                  <CartStatus />
                </Link>
              </li>
            )}
            {user && user.isAdmin && (
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
              <li className="shrink-0">
                <User user={user} />
              </li>
            )}
            <li>
              {user && <Button text={'Logout'} onClick={logout} />}
              {!user && <Button text={'Login'} onClick={login} />}
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
