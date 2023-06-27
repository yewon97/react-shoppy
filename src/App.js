import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AuthContextProvider from './context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <main
          id="main"
          className="w-full max-w-screen-xl mx-auto mb-20 flex-1 relative mt-20"
        >
          <Outlet />
        </main>
        <Footer />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
