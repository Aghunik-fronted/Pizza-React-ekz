import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/Card';

function Home({ onAdd }) {
    const pizzasData = [
        {id: 1, name: "Чизбургер-пицца", price: 395, category: 1, rating: 5, img: "images/image-1.png"},
        {id: 2, name: "Сырная", price: 450, category: 2, rating: 5, img: "images/image-2.png"},
        {id: 3, name: "Креветки по-азиатски", price: 290, category: 3, rating: 4, img: "images/image-3.png"},
        {id: 4, name: "Сырный цыпленок", price: 385, category: 1, rating: 4, img: "images/image-4.png"},
        {id: 5, name: "Чизбургер-пицца", price: 395, category: 1, rating: 4, img: "images/image-1.png"},
        {id: 6, name: "Сырная", price: 450, category: 2, rating: 4, img: "images/image-2.png"},
        {id: 7, name: "Креветки по-азиатски", price: 290, category: 3, rating: 3, img: "images/image-3.png"},
        {id: 8, name: "Сырный цыпленок", price: 385, category: 1, rating: 3, img: "images/image-4.png"}
    ];

    return (
        <div className='p-10'>
            <div className='flex items-start justify-between mb-10'>
                <Categories />
                <Sort />
            </div>
            <h2 className='text-3xl font-bold mb-8'>Все пиццы</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-start">
                {pizzasData.map((obj) => (
                    <Card 
                        key={obj.id} 
                        {...obj} 
                        onClickAdd={() => onAdd(obj)} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;