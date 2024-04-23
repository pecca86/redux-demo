/* eslint react/prop-types: 0 */
import Button from "../../ui/elements/Button";
const CartItem = ({ pizza }) => {
    return (
        <li className="py-3 flex items-center justify-between">
            <div>
                <p className="text-lg font-bold">{pizza.quantity} x {pizza.name}</p>
                <p>Price: {pizza.unitPrice}€ / Pizza</p>
                <p className="underline underline-offset-2">Total: {pizza.totalPrice}€</p>
            </div>
            <Button type={'danger'} size={'small'}>Remove</Button>
        </li>
    );
}

export default CartItem;
