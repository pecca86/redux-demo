import React from 'react';
import { useSelector } from 'react-redux';

const Customer = () => {
    const customer = useSelector(store => store.customer);
    console.log('Customer:', customer);

    return (
        <div>
            <h2>Customer</h2>
            <p>Customer Info</p>
            <p>Name: {customer.name}</p>
            <p>Address: {customer.address}</p>
            <p>Customer since: {customer.createdAt}</p>
        </div>
    );
}

export default Customer;
