import { Storage } from "@/types/enums";
import { TCourse } from "@/types/models";

const isBrowser = typeof window !== 'undefined';

const getCart = () => {
    if (!isBrowser) return [];
    const cart = localStorage?.getItem(Storage.CART);
    return cart ? JSON.parse(cart) : [];
}

const getCartArr = (): TCourse[] => {
    return Object.values(getCart())
}

const setCart = (courses: TCourse[]) => {
    localStorage.setItem(Storage.CART, JSON.stringify(courses));
}

const addToCart = (course: TCourse) => {
    const cart = getCart();
    const newCart = { ...cart, [course.id]: course };
    setCart(newCart);
}

const removeFromCart = (courseId: number) => {
    const cart = getCart();
    const newCart = { ...cart };
    delete newCart[courseId];
    setCart(newCart);
}

const clearCart = () => {
    localStorage.removeItem(Storage.CART);
}
export const cartService = {
    getCart,
    addToCart,
    removeFromCart,
    clearCart,
    getCartArr,
}