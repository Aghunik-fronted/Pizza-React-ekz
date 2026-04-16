import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ items, total, onClear, onRemove, onChangeCount }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-5">Корзина пустая 😕</h2>
        <Link to="/" className="bg-[#282828] text-white px-8 py-3 rounded-full">Назад</Link>
      </div>
    );
  }

  return (
    <div className="max-w-[820px] mx-auto py-16 px-5">
      <div className="flex justify-between items-center mb-10">
        <div className='flex items-center justify-start gap-[17px]'>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.85844 27.9833C11.1931 27.9833 12.2751 26.9014 12.2751 25.5667C12.2751 24.232 11.1931 23.15 9.85844 23.15C8.52375 23.15 7.44177 24.232 7.44177 25.5667C7.44177 26.9014 8.52375 27.9833 9.85844 27.9833Z" stroke="#3F3F3F" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24.3584 27.9833C25.6931 27.9833 26.7751 26.9014 26.7751 25.5667C26.7751 24.232 25.6931 23.15 24.3584 23.15C23.0238 23.15 21.9418 24.232 21.9418 25.5667C21.9418 26.9014 23.0238 27.9833 24.3584 27.9833Z" stroke="#3F3F3F" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.04294 7.44166H27.9834L25.9534 17.5796C25.8429 18.1359 25.5402 18.6356 25.0984 18.9913C24.6566 19.3469 24.1038 19.5359 23.5367 19.525H10.7646C10.1746 19.53 9.60307 19.319 9.15789 18.9317C8.71272 18.5443 8.42463 18.0076 8.34794 17.4225L6.51127 3.50249C6.43511 2.92157 6.1505 2.3881 5.71039 2.00134C5.27029 1.61459 4.70467 1.40088 4.11877 1.39999H1.40002" stroke="#3F3F3F" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h2 className="text-3xl font-bold"> Корзина</h2>   
        </div>
        <button onClick={onClear} className="text-[#b6b6b6] font-[16px] cursor-pointer flex gap-[3px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Очистить корзину</button>
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-between py-6 border-t border-[#f4f4f4]">
          <div className="flex items-center gap-4 w-[400px]">
            <img className="w-20 h-20" src={item.img} alt="" />
            <b className="text-xl">{item.name}</b>
          </div>
          <div className="flex items-center gap-[15px]">
              <button 
                onClick={() => onChangeCount(item.id, -1)}
                className="w-8 h-8 rounded-full border-2 border-[#fe5f1e] bg-transparent text-[#fe5f1e] text-xl font-bold cursor-pointer hover:bg-[#fe5f1e] hover:text-white transition flex items-center justify-center pb-1"
              >
                -
              </button>
              <b className="text-[22px]">{item.count || 1}</b>
              <button 
                onClick={() => onChangeCount(item.id, 1)}
                className="w-8 h-8 rounded-full border-2 border-[#fe5f1e] bg-transparent text-[#fe5f1e] text-xl font-bold cursor-pointer hover:bg-[#fe5f1e] hover:text-white transition flex items-center justify-center pb-1"
              >
                +
              </button>
            </div>
          <b className="text-xl w-24 text-right">{item.price * item.count} ₽</b>
          <button onClick={() => onRemove(item.id)} className="text-gray-300 cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="15" fill="white" stroke="#D7D7D7" stroke-width="2" />
                    <path d="M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3696 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3696 19.7479 17.9557Z" fill="#D0D0D0" />
                </svg>
          </button>
        </div>
      ))}
      <div className="flex justify-between mt-10">
        <span>Всего: <b>{items.length} шт.</b></span>
        <span>Сумма: <b className="text-orange-500">{total} ₽</b></span>
      </div>
    </div>
  );
}

export default Cart;