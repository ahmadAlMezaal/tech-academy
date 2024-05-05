'use client'
import Image from 'next/image';
import { cartService } from '@/services/cart.service';
import { useEffect, useState } from 'react';
import { TCourse } from '@/types/models';

const cartItemsArr = cartService.getCartArr();

export const CartIcon = () => {

    const [cartItems, setCartItems] = useState<TCourse[]>([]);

    useEffect(
        () => {
            setCartItems(cartItemsArr);
        },
        []
    );

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <Image
                src="/cart.jpeg"
                alt="Cart"
                width={35}
                height={35}
                className="cursor-pointer"
            />
            {
                cartItems.length > 0 && (
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        backgroundColor: 'red',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        color: 'white'
                    }}>
                        <p>{cartItems.length}</p>
                    </div>
                )}
        </div>
    );
};
