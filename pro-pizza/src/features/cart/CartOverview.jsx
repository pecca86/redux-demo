import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPizzaCount, getCartCostTotal } from "./cartSlice";


const CartOverview = () => {
    const cart = useSelector(state => state.cart.cart);
    const pizzaCount = useSelector(getPizzaCount);
    const cartCostTotal = useSelector(getCartCostTotal);

    if (!cart.length) return null;

    return (
        <div className="bg-stone-600 text-stone-200 p-4 space-y-4 flex items-center justify-between">
            <p className="font-semibold uppercase">{pizzaCount} pizzas 🛒</p>
            <p className="text-sm">Sum: ${cartCostTotal}</p>
            <Link className="tracking-wide hover:text-yellow-500" to="/cart">Go to cart</Link>
        </div>
    );
}

export default CartOverview;