import Link from 'next/link';
import React from 'react';
import Logo from '@/app/_components/Logo';
import { auth } from '../_lib/auth';

const Navigation = async () => {
    const session = await auth();
    console.log(session);

    return (
        <nav className="z-10 text-xl">
            <Logo />
            <ul className="flex gap-16 items-center">
                <li><Link href="/" className="hover:text-accent-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-accent-400 transition-colors">About</Link></li>
                <li><Link href="/cabins" className="hover:text-accent-400 transition-colors">Cabins</Link></li>
                <li>
                    {session?.user?.image ? (
                        <Link href="/account" className="hover:text-accent-400 transition-colors flex items-center gap-2">
                            <img src={session.user.image} className='h-8 rounded-full' alt="user img" referrerPolicy='no-referrer' />
                            <span>Account</span>
                        </Link>
                    ) : (
                        <Link href="/account" className="hover:text-accent-400 transition-colors">Account</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
