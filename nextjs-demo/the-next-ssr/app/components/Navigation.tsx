import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

const Navigation = () => {
    return (
        <nav>
            <Logo />
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/account">Account</Link></li>
                <li><Link href="/cabins">Cabins</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
