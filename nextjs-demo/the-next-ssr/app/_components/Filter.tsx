"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';


type FnHandleFilter = (filter: string) => void;

const Filter = () => {
    const searchParam = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const activeFilter = searchParam.get('capacity') || 'all';

    const handleFilter = (filter: string) => {
        const params = new URLSearchParams(searchParam);
        params.set('capacity', filter);
        router.replace(`${pathName}?${params.toString()}`,
            { scroll: false }
        );
    }

    return (
        <div className='border border-primary-800 flex'>
            <FilterButton name='All' isActive={activeFilter === 'all'} handleFilter={handleFilter} />
            <FilterButton name='Small' isActive={activeFilter === 'small'} handleFilter={handleFilter} />
            <FilterButton name='Medium' isActive={activeFilter === 'medium'} handleFilter={handleFilter} />
            <FilterButton name='Large' isActive={activeFilter === 'large'} handleFilter={handleFilter} />
        </div>
    );
}

function FilterButton({ name, isActive, handleFilter }: { name: string, isActive: boolean, handleFilter: FnHandleFilter }) {
    return (
        <button className={`px-5 py-2 hover:bg-primary-700 ${isActive ? 'bg-primary-700': ''}`} onClick={() => handleFilter(name.toLowerCase())}>
            {name}
        </button>
    );
}

export default Filter;
