import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <Link href="/">
            <Image src="/vercel.svg" alt="My logo" height={60} width={100} className='bg-primary-50 p-2 rounded-lg mb-2'/>
        </Link>
    );
}

export default Logo;
