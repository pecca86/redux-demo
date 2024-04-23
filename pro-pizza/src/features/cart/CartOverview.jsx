import { Link } from "react-router-dom";

const CartOverview = () => {
    return (
        <div className="bg-stone-600 text-stone-200 p-4 space-y-4 flex items-center justify-between">
            <div>
                <p className="font-semibold uppercase">23 pizzas 🛒</p>
            </div>
            <div>
                <p>Sum: $10101.40</p>
            </div>
            <Link className="tracking-wide" to="/cart">Go to cart</Link>
        </div>
    );
}

export default CartOverview;
