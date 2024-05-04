import { CartActions } from '@/types/enums';
import { CartContextType, TCourse } from '@/types/models';

export const initialCartState: CartContextType = {
    cartItems: {},
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    updateCartQuantity: () => { }
};

export type Action =
    { type: CartActions.ADD_ITEM; payload: TCourse } |
    { type: CartActions.REMOVE_ITEM; payload: { courseId: number } } |
    { type: CartActions.UPDATE_QUANTITY; payload: number };

export const cartReducer = (state = initialCartState, action: Action) => {
    switch (action.type) {

        case CartActions.ADD_ITEM: {
            console.log('state: ', state.cartItems)

            return {
                ...state,
                cartItems: { ...state.cartItems, [action.payload.id]: action.payload }
            };
        }

        case CartActions.REMOVE_ITEM:
            const newItems = { ...state.cartItems };
            delete newItems[action.payload.courseId];

            return {
                ...state,
                cartItems: { ...newItems },
            };

        case CartActions.UPDATE_QUANTITY:
            return {
                ...state,
                isSnackbarVisible: action.payload,
            };

        default:
            return { ...state };
    }
};