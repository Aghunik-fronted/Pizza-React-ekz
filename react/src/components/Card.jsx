import React, { useState } from 'react';

function Card({ name, price, img, onClickAdd, addedCount }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const typeNames = ['тонкое', 'традиционное'];
  const sizes = [26, 30, 40];
  const onAddPizza = () => {
    const item = {
        name,
        price,
        img,
        type: typeNames[activeType],
        size:sizes[activeSize],
    };
    onClickAdd(item);
  };

  return (
    <div className='w-[280px] text-center mb-10'>
        <img className="w-[260px] mx-auto mb-3" src={img} alt="Pizza" />
        <h4 className='text-xl font-extrabold mb-5 h-14 flex items-center justify-center'>{name}</h4>
        <div className='bg-[#f3f3f3] rounded-[10px] p-2 flex flex-col gap-2'>
            <ul className='flex flex-1 gap-1'>
                {typeNames.map((type, i) =>(
                    <li
                        key={type}
                        onClick={() => setActiveType(i)}
                        className={`flex-1 py-2 text-sm font-bold text-[#2c2c2c] cursor-pointer rounded-[5px] transition-all ${activeType === i ? 'bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.04)]' : 'hover:opacity-60'}`}
                    >
                        {type}
                    </li>
                ))}
            </ul>
            <ul className='flex flex-1 gap-1'>
                {sizes.map((size, i) => (
                    <li
                        key={size}
                        onClick={() => setActiveSize(i)}
                        className={`flex-1 py-2 text-sm font-bold text-[#2c2c2c] cursor-pointer rounded-[5px] transition-all ${activeSize === i ? 'bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.04)]' : 'hover:opacity-60'}`}
                    >
                        {size} см.
                    </li>
                ))}
            </ul>
        </div>
        <div className='flex items-center justify-between mt-5 px-2'>
            <div className='font-bold text-2xl'>от {price} ₽</div>
            <button onClick={onAddPizza} className='flex items-center gap-2 border border-[#fe5f1e] px-4 py-2 rounded-full font-bold text-[#fe5f1e] cursor-pointer hover:bg-[#fe5f1e] hover:text-white transition-all group'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" 
                        fill="currentColor" 
                    />
                </svg>
                <span className="font-bold text-[16px]">Добавить</span>
                <i className='bg-[#fe5f1e] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center not-italic group-hover:bg-white group-hover:text-[#fe5f1e]'>
                    { addedCount }
                </i>
            </button>
        </div>
    </div>
  );
}

export default Card;