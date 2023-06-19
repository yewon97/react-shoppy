import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main id="main" className="w-full max-w-screen-xl mx-auto mb-20 flex-1">
        <Outlet />
      </main>
			<Footer />
    </>
  );
}

export default App;
