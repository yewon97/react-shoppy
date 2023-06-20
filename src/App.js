import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <main id="main" className="w-full max-w-screen-xl mx-auto mb-20 flex-1 relative mt-20">
        <Outlet />
      </main>
			<Footer />
    </AuthContextProvider>
  );
}

export default App;
