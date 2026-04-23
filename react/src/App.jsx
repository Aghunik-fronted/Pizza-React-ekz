import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';
import { CartProvider } from './context/CartContext'; 

function App() {
    return (
        <CartProvider>
            <div className='bg-[#FFDF8C] min-h-screen py-10'>
                <div className='bg-white w-[95%] max-w-[1400px] mx-auto rounded-3xl shadow-xl overflow-hidden min-h-[90vh]'>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </div>
        </CartProvider>
    );
}

export default App;