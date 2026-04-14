import React, { useState } from 'react';

function Sort() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  
  const sortList = ['популярности', 'цене', 'алфавиту'];
  const sortName = sortList[selected];

  return (
    <div className="relative">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpen(!open)}>
        <svg
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
          width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://w3.org"
        >
          <path 
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" 
            fill="#2C2C2C" 
          />
        </svg>
        <b className="text-sm">Сортировка по:</b>
        <span className="text-sm text-orange-500 border-b border-dashed border-orange-500 ml-1">
          {sortName}
        </span>
      </div>

      {open && (
        <div className="absolute right-0 top-10 bg-white shadow-xl rounded-xl py-3 w-40 z-10 border border-gray-50">
          <ul>
            {sortList.map((name, i) => (
              <li
                key={i}
                onClick={() => {
                  setSelected(i);
                  setOpen(false);
                }}
                className={`px-4 py-2 hover:bg-orange-50 hover:text-orange-500 cursor-pointer text-sm ${
                  selected === i ? 'text-orange-500 font-bold bg-orange-50' : ''
                }`}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;