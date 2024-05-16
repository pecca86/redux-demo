
import React from 'react';
import Select from './Select';
import { useSearchParams } from 'react-router-dom';

const SortBy = ({ options }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get('sort') || 'name-asc';

    const handleChange = (e) => {
        searchParams.set('sort', e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <Select options={options} onChange={handleChange} value={sortBy} />
    );
}

export default SortBy;
