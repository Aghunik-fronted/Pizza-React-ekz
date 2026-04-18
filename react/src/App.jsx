import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

function App() {
    
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const onAddToCart = (obj) => {
        setCartItems((prev) => {
   
            const findItem = prev.find(
                (item) => item.id === obj.id && item.type === obj.type && item.size === obj.size
            );

            if (findItem) {
                return prev.map((item) =>
                    item.id === obj.id && item.type === obj.type && item.size === obj.size
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            }
            return [...prev, { ...obj, count: 1 }];
        });
    };

    const onChangeCount = (id, delta, type, size) => {
        setCartItems((prev) =>
            prev.map((item) => {
                if (item.id === id && item.type === type && item.size === size) {
                    const newCount = item.count + delta;
                    return { ...item, count: newCount > 0 ? newCount : 1 };
                }
                return item;
            })
        );
    };
    const onRemoveItem = (id, type, size) => {
        setCartItems((prev) => 
            prev.filter((item) => 
                !(item.id === id && item.type === type && item.size === size)
            )
        );
    };
    const onClearCart = () => setCartItems([]);

    const totalPrice = cartItems.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);
    const totalCount = cartItems.reduce((sum, obj) => obj.count + sum, 0);

    return (
        <div className='bg-[#FFDF8C] min-h-screen py-10'>
            <div className='bg-white w-[95%] max-w-[1400px] mx-auto rounded-3xl shadow-xl overflow-hidden min-h-[90vh]'>
                <Header totalPrice={totalPrice} totalCount={totalCount} />
                <Routes>
                    <Route path="/" element={<Home items={cartItems} onAdd={onAddToCart} />} />
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