import { cartService } from '@/services/cart.service';
import React, { useEffect, useState } from 'react';
import '@/app/ui/globals.css';
import { TCourse } from '@/types/models';
import Link from 'next/link';
import { Layout } from '@/components/layout';

const cartItemsArr = cartService.getCartArr();
const Cart = () => {

    const [cartItems, setCartItems] = useState<TCourse[]>([]);

    useEffect(
        () => {
            setCartItems(cartItemsArr);
        },
        []
    );

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => (item.price * cartItems.length), 0).toFixed(2);
    };

    const handleRemoveFromCart = (courseId: number) => {
        cartService.removeFromCart(courseId);
        setCartItems(cartService.getCartArr());
    }


    return <Layout>
        <div className="container mx-auto px-4 py-8">
            <h1 className="font-bold mb-4 text-4xl">Shopping Cart</h1>
            <div>
                {
                    !cartItems.length ?
                        <p className='text-3xl text-center py-3'>Cart empty</p> :
                        cartItems?.map(
                            (item, index) => <div key={index} className="flex justify-between items-center bg-white p-4 mb-2 rounded shadow">
                                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                                <div className="flex-grow ml-4">
                                    <h2 className="font-bold">{item.title}</h2>
                                    <p className="text-sm">{item.author}</p>
                                </div>
                                <div className='items-center flex flex-col'>
                                    <div className="flex">
                                        <button onClick={() => handleRemoveFromCart(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            Remove
                                        </button>
                                    </div>
                                    <p className="font-bold mt-2">${item.price}</p>
                                </div>
                            </div>
                        )
                }
            </div>
            <div className="text-right font-bold mb-4">
                <p>Total: ${getTotalPrice()}</p>
            </div>
            <div className="flex justify-between">
                <Link href={`/`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Continue Shopping
                </Link>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    </Layout>
};

export default Cart;
