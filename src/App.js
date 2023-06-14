import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main id="main" className="w-full max-w-screen-xl mx-auto mb-20 flex-1">
        <Outlet />
      </main>
			<Footer />
    </>
  );
}

export default App;
