import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCustomer, updateCustomer } from '../../features/customers/customerSlice';

const CreateCustomer = () => {
    const [firstName, setFirstName] = useState('');
    const [address, setAddress] = useState('');
    const [isCreated, setIsCreated] = useState(false);

    const dispatch = useDispatch();

    const handleCreateCustomer = (e) => {
        e.preventDefault();
        console.log('Create Customer:', firstName, address);
        dispatch(createCustomer(firstName, address));
        setIsCreated(true);
    }

    const handleUpdateCustomer = (e) => {
        e.preventDefault();
        console.log('Update Customer:', firstName, address);
        dispatch(updateCustomer(firstName, address));
    }

    return (
        <div className='content-box'>
            <h2>{isCreated ? 'Update Customer' : 'Create Customer'}</h2>
            <form className='create-customer-form'>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={e => setFirstName(firstName => e.target.value)} />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" value={address} onChange={e => setAddress(address => e.target.value)} />
                </div>
                {
                    isCreated ? <button onClick={(e) => handleUpdateCustomer(e)} type="submit">Update Customer</button>
                        : <button onClick={(e) => handleCreateCustomer(e)} type="submit">Create Customer</button>
                }

            </form>
        </div>
    );
}

export default CreateCustomer;
