import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const findItem = state.items.find(obj => 
                obj.id === action.payload.id && 
                obj.type === action.payload.type && 
                obj.size === action.payload.size
            );

            if (findItem) {
                return {
                    ...state,
                    items: state.items.map(item => 
                        item === findItem ? { ...item, count: item.count + 1 } : item
                    )
                };
            }

            return {
                ...state,
                items: [...state.items, { ...action.payload, count: 1 }]
            };
        }

        case 'MINUS_ITEM':
            return {
                ...state,
                items: state.items.map(obj => 
                    obj.id === action.payload.id && 
                    obj.type === action.payload.type && 
                    obj.size === action.payload.size
                        ? { ...obj, count: obj.count > 1 ? obj.count - 1 : 1 }
                        : obj
                )
            };

        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(obj => 
                    !(obj.id === action.payload.id && 
                      obj.type === action.payload.type && 
                      obj.size === action.payload.size)
                )
            };

        case 'CLEAR_CART':
            return { ...state, items: [] };

        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        items: JSON.parse(localStorage.getItem('cart') || '[]')
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.items));
    }, [state.items]);

    const totalPrice = state.items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);
    const totalCount = state.items.reduce((sum, obj) => obj.count + sum, 0);

    return (
        <CartContext.Provider value={{ items: state.items, dispatch, totalPrice, totalCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);