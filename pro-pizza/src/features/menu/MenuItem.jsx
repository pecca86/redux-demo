/* eslint react/prop-types: 0 */
import Button from "../../ui/elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";

const MenuItem = ({ pizza }) => {
    const dispatch = useDispatch();
    const currentQuantity = useSelector(state => getCurrentQuantityById(state, pizza.id));
    
    const handleAddToCart = () => {
        const newPizza = {
            pizzaId: pizza.id,
            name: pizza.name,
            quantity: 1,
            unitPrice: pizza.unitPrice,
            totalPrice: pizza.unitPrice * 1,
        }
        dispatch(addItem(newPizza));
    }

    return (
        <div className="flex gap-4">
            <img src={pizza.imageUrl} alt={pizza.name} className="h-24" />
            <div className="flex flex-col flex-grow">
                <p className="text-xl mb-2">{pizza.name} {currentQuantity > 0 && <span className="mx-1 text-sm bg-yellow-200 rounded-full border-2 px-1">{currentQuantity}</span>}</p>
                <p className="italic">{pizza.ingredients.join(', ')}</p>
                <p className="text-red-500 mt-auto">{pizza.soldOut ? 'Sold out!' : (<Button onClick={handleAddToCart} type={'primary'} size={'small'}>{'Add to cart ' + pizza.unitPrice + ' €'}</Button>)}</p>
            </div>
        </div>
    );
}

export default MenuItem;
