import React, { useState} from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/Card';

function Home({ items, onAdd }) {
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({ name: 'популярности', sortProperty: 'rating' });

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
    const filteredPizzas = pizzasData
        .filter(obj => categoryId > 0 ? obj.category === categoryId : true)
        .sort((a, b) => {
            if (sortType.sortProperty === 'name') {
                return a.name.localeCompare(b.name); 
            }
            return b[sortType.sortProperty] - a[sortType.sortProperty]; 
        });

    return (
        <div className='p-10'>
            <div className='flex items-start justify-between mb-10'>
                <Categories 
                    value={categoryId} 
                    onChangeCategory={(id) => setCategoryId(id)}
                />
                <Sort value={sortType} onChangeSort={(obj) => setSortType(obj)} />
            </div>
            <h2 className='text-3xl font-bold mb-8'>{categoryId === 0 ? 'Все' : ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'][categoryId]} пиццы</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-start">
                {filteredPizzas.map((obj) => {
                    const addedCount = items
                        .filter((item) => item.id === obj.id)
                        .reduce((sum, item) => sum + item.count, 0);

                    return (
                        <Card 
                            key={obj.id} 
                            {...obj} 
                             onClickAdd={(item) => onAdd({ ...obj, ...item })} 
                            addedCount={addedCount}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Home;