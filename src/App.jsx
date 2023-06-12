import React from 'react';
import { Outlet } from 'react-router-dom';
import { AiTwotoneShop } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <AiTwotoneShop />
        <h1>Shoppy</h1>

        <nav>
          <ul>
            <li>
              <Link to={'/products'}>Products</Link>
            </li>
            <li>
              <Link to={'/cart'}>Cart</Link>
            </li>
            <li>
              <Link to={'/cart'}>Cart</Link>
            </li>
            <li>
              <button type="button">Login</button>
            </li>
          </ul>
        </nav>
      </header>
			
      <Outlet />
    </>
  );
}

export default App;
