import Link from 'next/link';
import React from 'react';
import Logo from '@/app/_components/Logo';

const Navigation = () => {
    return (
        <nav className="z-10 text-xl">
            <Logo />
            <ul className="flex gap-16 items-center">
                <li><Link href="/" className="hover:text-accent-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-accent-400 transition-colors">About</Link></li>
                <li><Link href="/account" className="hover:text-accent-400 transition-colors">Account</Link></li>
                <li><Link href="/cabins" className="hover:text-accent-400 transition-colors">Cabins</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
