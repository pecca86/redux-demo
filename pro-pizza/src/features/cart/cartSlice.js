import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const { pizzaId, name, quantity, unitPrice, totalPrice } = action.payload;
            // check if item already exists in cart
            const existingItem = state.cart.find(item => item.pizzaId === pizzaId);
            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.totalPrice = existingItem.unitPrice * existingItem.quantity;
                return;
            }
            state.cart.push({ pizzaId, name, quantity, unitPrice, totalPrice });
        },
        removeItem(state, action) {
            const pizzaId  = action.payload;
            state.cart = state.cart.filter(item => item.pizzaId !== pizzaId);
        },
        emptyCart(state) {
            state.cart = [];
        },
        increaseQty(state, action) {
            const pizzaId = action.payload;
            const item = state.cart.find(item => item.pizzaId === pizzaId);
            item.quantity++;
            item.totalPrice = item.unitPrice * item.quantity;
        },
        decreaseQty(state, action) {
            const pizzaId = action.payload;
            const item = state.cart.find(item => item.pizzaId === pizzaId);
            if (item.quantity === 1) {
                return;
            }
            item.quantity--;
            item.totalPrice = item.unitPrice * item.quantity;
        },
    }
});

export const getTotalCost = (state) => {
    const totalSum = state.cart.cart.reduce((sum, pizza) => sum + pizza.unitPrice, 0);
    return totalSum;
}

export const getCartCostTotal = (state) => {
    const totalSum = state.cart.cart.reduce((sum, pizza) => sum + pizza.totalPrice, 0);
    return totalSum;
}

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = (state, pizzaId) => {
    const item = state.cart.cart.find(item => item.pizzaId === pizzaId);
    return item ? item.quantity : 0;
}

export const getPizzaCount = (state) => state.cart.cart.reduce((count, pizza) => count + pizza.quantity, 0);

export const { addItem, removeItem, emptyCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;