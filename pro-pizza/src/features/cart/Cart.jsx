import LinkButton from "../../ui/elements/LinkButton";
import Button from "../../ui/elements/Button";
import CartItem from "./CartItem";


const fakeCart = [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 6,
      name: 'Vegetale',
      quantity: 1,
      unitPrice: 13,
      totalPrice: 13,
    },
    {
      pizzaId: 11,
      name: 'Spinach and Mushroom',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ];

const Cart = () => {
    const cart = fakeCart;

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
                <Button type={'primary'} size={'large'}>Order</Button>
                <Button type={'secondary'} size={'large'}>Empty cart</Button>
            </div>
        </div>
    );
}

export default Cart;
