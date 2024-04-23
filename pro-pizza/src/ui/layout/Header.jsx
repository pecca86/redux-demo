import { Link } from "react-router-dom";
import SearchOrder from "../../features/order/SearchOrder";

const Header = () => {
    return (
        <header className="bg-yellow-500 px-4 py-3 border-b-4 border-sky-500 flex items-center justify-between">
            <div>
                <Link to="/">Home 🍕</Link>
                <Link to="/menu">Menu 🗺️</Link>
            </div>
            <SearchOrder />
            <p>Logged in: Pexi-Sexi</p>
        </header>
    );
}

export default Header;
