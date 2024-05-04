import { CartActions } from '@/types/enums';
import React, { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import { cartReducer, initialCartState } from './cart.reducer';
import { CartContextType, TCourse } from '@/types/models';

export const CartContext = createContext<CartContextType>(initialCartState);

export const CartProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(cartReducer, initialCartState);

    const addItemToCart = useCallback(
        (course: TCourse) => {
            dispatch(
                {
                    type: CartActions.ADD_ITEM,
                    payload: course,
                }
            );
        },
        [dispatch]
    );

    const removeItemFromCart = useCallback(
        (courseId: number) => {
            dispatch(
                {
                    type: CartActions.REMOVE_ITEM,
                    payload: { courseId }
                }
            );
        },
        [dispatch]
    );

    const updateCartQuantity = useCallback(
        (quantity: number) => {
            dispatch(
                {
                    type: CartActions.UPDATE_QUANTITY,
                    payload: quantity
                }
            );
        },
        [dispatch]
    );

    const value = useMemo(
        () => (
            {
                cartItems: state.cartItems,
                removeItemFromCart,
                addItemToCart,
                updateCartQuantity,

            }
        ),
        [
            state,
            addItemToCart,
            removeItemFromCart,
            updateCartQuantity,
        ]
    );

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error('useCart must be used within CartContext');
    }

    return context;
};