import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchOrder = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        navigate(`/order/${query}`);
        setQuery('');
    };
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input
                    onChange={e => setQuery(e.target.value)}
                    type="text"
                    id='search-order'
                    placeholder='Search order by id'
                    value={query}
                    className='
                    rounded-full 
                    px-4
                    py-2 
                    text-sm
                    mx-2
                    sm:w-80
                    transition-all
                    duration-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-yellow-600
                    '
                />
            </form>
        </div>
    );
}

export default SearchOrder;
