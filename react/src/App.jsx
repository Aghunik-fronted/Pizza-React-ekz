import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const onAddToCart = (obj) => {
        setCartItems((prev) => {
        const findItem = prev.find((item) => item.id === obj.id);

        if (findItem) {
            return prev.map((item) =>
                item.id === obj.id ? { ...item, count: (item.count || 1) + 1 } : item
            );
            }
            return [...prev, { ...obj, count: 1 }];
        });
    };

    const onChangeCount = (id, delta) => {
        setCartItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newCount = item.count + delta;
                    return {...item, count: newCount > 0 ? newCount : 1};
                }
                return item;
            })
        );
    };
    const onRemoveItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    }
    const onClearCart = () => setCartItems([]);

    const totalPrice = cartItems.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);
    const totalCount = cartItems.reduce((sum, obj) => obj.count + sum, 0);

    return (
        <div className='bg-[#FFDF8C] min-h-screen py-10'>
            <div className='bg-white w-[95%] max-w-[1400px] mx-auto rounded-3xl shadow-xl overflow-hidden min-h-[90vh]'>
                <Header totalPrice={totalPrice} totalCount={totalCount} />
                <Routes>
                    <Route path="/" element={<Home onAdd={onAddToCart} />} />
                    <Route 
                        path="/cart" 
                        element={
                            <Cart 
                                items={cartItems} 
                                total={totalPrice} 
                                onClear={onClearCart} 
                                onRemove={onRemoveItem} 
                                onChangeCount={onChangeCount}
                            />
                        } 
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;