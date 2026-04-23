import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; 

function Card({ id, name, price, img }) {
  const { dispatch, items } = useCart(); 
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const typeNames = ['тонкое', 'традиционное'];
  const sizes = [26, 30, 40]; 

  const addedCount = items
    .filter(obj => obj.id === id)
    .reduce((sum, obj) => obj.count + sum, 0);

  const onAddPizza = () => {
    const item = {
      id,
      name,
      price,
      img,
      type: typeNames[activeType],
      size: sizes[activeSize],
    };
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <div className='w-[280px] text-center mb-10'>
        <img className="w-[260px] mx-auto mb-3" src={img} alt="Pizza" />
        <h4 className='text-xl font-extrabold mb-5 h-14 flex items-center justify-center'>{name}</h4>
        <div className='bg-[#f3f3f3] rounded-[10px] p-2 flex flex-col gap-2'>
            <ul className='flex flex-1 gap-1'>
                {typeNames.map((type, i) => (
                    <li key={type} onClick={() => setActiveType(i)} className={`flex-1 py-2 text-sm font-bold text-[#2c2c2c] cursor-pointer rounded-[5px] transition-all ${activeType === i ? 'bg-white shadow' : 'hover:opacity-60'}`}>
                        {type}
                    </li>
                ))}
            </ul>
            <ul className='flex flex-1 gap-1'>
                {sizes.map((size, i) => (
                    <li key={size} onClick={() => setActiveSize(i)} className={`flex-1 py-2 text-sm font-bold text-[#2c2c2c] cursor-pointer rounded-[5px] transition-all ${activeSize === i ? 'bg-white shadow' : 'hover:opacity-60'}`}>
                        {size} см.
                    </li>
                ))}
            </ul>
        </div>
        <div className='flex items-center justify-between mt-5 px-2'>
            <div className='font-bold text-2xl'>от {price} ₽</div>
            <button onClick={onAddPizza} className='flex items-center gap-2 border border-[#fe5f1e] px-4 py-2 rounded-full font-bold text-[#fe5f1e] hover:bg-[#fe5f1e] hover:text-white transition-all group'>
                <span>+ Добавить</span>
                {addedCount > 0 && <i className='bg-[#fe5f1e] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center not-italic group-hover:bg-white group-hover:text-[#fe5f1e]'>{addedCount}</i>}
            </button>
        </div>
    </div>
  );
}

export default Card;