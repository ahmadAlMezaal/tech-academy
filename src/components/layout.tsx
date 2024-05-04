import React from 'react';
import { NavBar } from './navbar.component';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div>
        <NavBar />
        <main>{children}</main>
    </div>
);

