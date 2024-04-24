import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchOrder from "../../features/order/SearchOrder";
import { getPizzaCount } from "../../features/cart/cartSlice";

const Header = () => {
    const user = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);
    const pizzaCount = useSelector(getPizzaCount);


    return (
        <header className="bg-yellow-500 px-4 py-3 border-b-4 border-sky-500 flex items-center justify-between">
            <div className="flex flex-col">
                <Link to="/">Home 🍕</Link>
                <Link to="/menu">Menu 🗺️</Link>
                <Link to="/order/new">Order 🛒 {cart.cart && `(${pizzaCount})`}</Link>
            </div>
            <SearchOrder />
            {user?.userName && <p className='text-[10px]'>Logged in as {user.userName}</p>}
        </header>
    );
}

export default Header;
