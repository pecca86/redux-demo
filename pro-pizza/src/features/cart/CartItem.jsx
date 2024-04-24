/* eslint react/prop-types: 0 */
import Button from "../../ui/elements/Button";
import { removeItem, increaseQty, decreaseQty } from "./cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ pizza }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log('pizzaid', pizza.pizzaId);
        dispatch(removeItem(pizza.pizzaId));
    }

    const handleIncrease = () => {
        dispatch(increaseQty(pizza.pizzaId));
    }

    const handleDecrease = () => {
        dispatch(decreaseQty(pizza.pizzaId));
    }

    return (
        <li className="py-3 flex items-center justify-between">
            <div>
                <p className="text-lg font-bold">{pizza.quantity} x {pizza.name}</p>
                <p>Price: {pizza.unitPrice}€ / Pizza</p>
                <p className="underline underline-offset-2">Total: {pizza.totalPrice}€</p>
            </div>
            <div className="flex flex-col">
                <Button onClick={() => handleDelete()} type={'danger'} size={'small'}>Remove</Button>
                <div className="flex items-center justify-center pt-2">
                    <button onClick={handleDecrease} className={`mx-1 text-sm bg-red-200 rounded-full border-2 px-1.5 border-black hover:bg-red-600 transition-colors duration-300`}>-</button>
                    <button onClick={handleIncrease} className="mx-1 text-sm bg-green-200 rounded-full border-2 px-1.5 border-black hover:bg-green-600 transition-colors duration-300">+</button>
                </div>
            </div>
        </li>
    );
}

export default CartItem;
