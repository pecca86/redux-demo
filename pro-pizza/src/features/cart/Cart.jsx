import LinkButton from "../../ui/elements/LinkButton";
import Button from "../../ui/elements/Button";
import CartItem from "./CartItem";
import { getCart, emptyCart } from "./cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const cart = useSelector(getCart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmptyCart = () => {
        dispatch(emptyCart());
    };

    const handleOrder = (e) => {
        e.preventDefault();
        navigate('/order/new');
    };

    if (!cart.length) {
        return (
            <div>
                <LinkButton to="/menu" navigateBack={false}>Back to menu</LinkButton>
                <h2 className="mt-10 text-lg">Your cart is empty 🛒</h2>
                <p className="text-md mt-5">Checkout our menu and order something now! 🍕</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-7">
            <div>
                <LinkButton to="/menu" navigateBack={false}>Back to menu</LinkButton>
            </div>
            <h2>Your cart, Pekka</h2>
            <ul className="divide-y divide-stone-500 border-b border-stone-500">
                {cart.map((item) => <CartItem pizza={item} key={item.pizzaId} />)}
            </ul>
            <div className="flex gap-5">
                <Button onClick={e => handleOrder(e)} type={'primary'} size={'large'}>Order</Button>
                <Button onClick={e => handleEmptyCart(e)} type={'secondary'} size={'large'}>Empty cart</Button>
            </div>
        </div>
    );
}

export default Cart;
