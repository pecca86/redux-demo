import React from 'react';
import Spinner from '../_components/SpinnerMini';

const Loading = () => {
    return (
        <div className='grid items-center justify-center'>
            <p className='test-xl text-primary-200'>Loading cabin data...</p>
            <Spinner />
        </div>
    );
}

export default Loading;
