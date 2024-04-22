const initialStateCustomer = {
    name: '',
    address: '',
    createdAt: ''
};

export default function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case 'customer/create':
            return {
                ...state,
                name: action.payload.name,
                address: action.payload.address,
                createdAt: action.payload.createdAt
            };
        case 'customer/update':
            return {
                ...state,
                name: action.payload.name,
                address: action.payload.address
            };
        default:
            return state;
    }
}

export const createCustomer = (name, address) => {
    return {
        type: 'customer/create',
        payload: {
            name,
            address,
            createdAt: new Date().toISOString()
        }
    };
}

export const updateCustomer = (name, address) => {
    return {
        type: 'customer/update',
        payload: {
            name,
            address
        }
    };
}