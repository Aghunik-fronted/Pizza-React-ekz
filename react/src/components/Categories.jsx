import React, { useState } from 'react';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex gap-4 overflow-x-auto pb-2'>
        {categories.map((name, i) => (
            <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`px-8 py-3 rounded-3xl font-bold transition-colors whitespace-nowrap cursor-pointer ${
                    activeIndex === i
                        ? 'bg-[#282828] text-white'
                        : 'bg-[#f9f9f9] text-[#2c2c2c] hover:bg-[#f3f3f3]'}`}>
                {name}
            </button>
        ))}
    </div>
  );
}

export default Categories;