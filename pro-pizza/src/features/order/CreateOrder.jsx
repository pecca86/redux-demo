
import { Form, redirect, useNavigation, useActionData, Link } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/elements/Button';
import { useState } from 'react';
import { useSelector } from "react-redux";


const CreateOrder = () => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [priority, setPriority] = useState(false);
    const userName = useSelector(state => state.user.userName);

    const fakeCart = [
        {
            pizzaId: 12,
            name: "Mediterranean",
            quantity: 2,
            unitPrice: 16,
            totalPrice: 32,
        },
        {
            pizzaId: 6,
            name: "Vegetale",
            quantity: 1,
            unitPrice: 13,
            totalPrice: 13,
        },
        {
            pizzaId: 11,
            name: "Spinach and Mushroom",
            quantity: 1,
            unitPrice: 15,
            totalPrice: 15,
        },
    ];

    const navigation = useNavigation();
    const isLoading = navigation.state === 'submitting';
    const formErrors = useActionData();

    if (isLoading) {
        return <div>Placing your order, please wait...</div>
    }

    if (!userName) {
        return (
            <div className='m-5 flex flex-col'>
                <p className='text-xl'>You must be registered as a user to order!</p>
                <Link to='/' className='text-blue-500 hover:text-blue-900 mt-8'>Register as a user</Link>
            </div>
        )
    }

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-3xl'>Create Order</h1>
            <Form method='POST' action='/order/new'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        name="customer"
                        required
                        className='input text-center'
                        value={name}
                    />
                    {formErrors?.customer && <p className='bg-red-200 rounded-md p-1'>{formErrors.customer}</p>}
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        id="address"
                        name="address"
                        required
                        className='input text-center'
                        value={address}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="phone">Phone</label>
                    <input
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        id="phone"
                        name="phone"
                        required
                        className='input text-center'
                        value={phone}
                    />
                    {formErrors?.phone && <p className='bg-red-200 rounded-md p-1'>{formErrors.phone}</p>}
                </div>
                <div className='mb-5 flex gap-4'>
                    <input
                        onChange={() => setPriority(!priority)}
                        type="checkbox"
                        id="priority"
                        name="priority"
                        className='h-6 w-6 accent-yellow-500'
                        checked={priority}
                    />
                    <label htmlFor="priority">Give priority</label>
                </div>
                <input type="hidden" name='cart' value={JSON.stringify(fakeCart)} />
                <Button type={'primary'} size={'large'}>Create Order</Button>
            </Form>
        </div>
    );
}

const checkFormErrors = (data) => {
    const errors = {};
    if (data.phone.length < 10) {
        errors.phone = 'Phone number must be 10 digits long'
    }

    if (data.customer.length < 3) {
        errors.customer = 'Name must be at least 3 characters long'
    }

    return errors;
}

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === 'on',
    }

    const errors = checkFormErrors(order);
    console.log(errors);

    if (Object.keys(errors).length > 0) {
        return errors;
    }

    const newOrder = await createOrder(order);
    return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
