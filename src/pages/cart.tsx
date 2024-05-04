import React from 'react';
import '@/app/ui/globals.css';
import { CartProvider, useCartContext } from '@/context/cart.provider';

const cartItems = [
    {
        id: 1,
        title: "iOS & Swift - The Complete iOS App Development Bootcamp",
        author: "Angela Yu",
        image: "/images/ios-swift.jpeg",
        price: 129.99,
        quantity: 1
    },
    {
        id: 2,
        title: "The Web Developer Bootcamp 2021",
        author: "Colt Steele",
        image: "/images/web-developer.jpeg",
        price: 149.99,
        quantity: 1
    },
    {
        id: 3,
        title: "The Complete 2021 Flutter Development Bootcamp with Dart",
        author: "Dr. Angela Yu",
        image: "/images/flutter-dart.jpeg",
        price: 139.99,
        quantity: 1
    }
];
const ShoppingCart = () => {
    console.log('testCart: ', Object.values(useCartContext().cartItems).length);

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return <CartProvider>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <div>
                {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-white p-4 mb-2 rounded shadow">
                        <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                        <div className="flex-grow ml-4">
                            <h2 className="font-bold">{item.title}</h2>
                            <p className="text-sm">{item.author}</p>
                        </div>
                        <div className="flex items-center">
                            <button className="px-3 py-1 bg-gray-200 text-gray-800">-</button>
                            <span className="px-4">{item.quantity}</span>
                            <button className="px-3 py-1 bg-gray-200 text-gray-800">+</button>
                        </div>
                        <span className="font-bold">${item.price.toFixed(2)}</span>
                    </div>
                ))}
            </div>
            <div className="text-right font-bold mb-4">
                <p>Total: ${getTotalPrice()}</p>
            </div>
            <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Continue Shopping
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    </CartProvider>
};

export default ShoppingCart;
