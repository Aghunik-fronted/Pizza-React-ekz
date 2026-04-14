import './App.css';
import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';

function App() {
  return (
    <div className='bg-[#FFDF8C] min-h-screen py-10'>
        <div className='bg-white w-[95%] max-w-[1400px] mx-auto rounded-3xl shadow-xl overflow-hidden min-h-[90vh]'>
            <Header/>
            <div className='p-10'>
                <div className='flex items-center justify-between mb-10'>
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className='text-3xl font-bold mb-8'>Все пиццы</h2>
                <p className='text-gray-400'>Список пицц загружается...</p>
            </div>
        </div>
    </div>
  );
}

export default App;