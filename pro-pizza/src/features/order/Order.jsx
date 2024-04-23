import OrderItem from "./OrderItem";
import OderPizzaItem from "./OderPizzaItem";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const order = useLoaderData();
    return (
        <div className="py-6 px-4">
            <div className="space-y-8">
                <OrderItem>
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">Status</h2>
                        <div className="space-y-3">
                            <p>Priority: {order.priority ? 'Yes' : 'No'}</p>
                            <p className="bg-stone-200 px-6 py-5 flex flex-col rounded-md">Estimated time of arrival: <span className="text-sm border border-red-400 rounded-full p-2">{order.estimatedDelivery}</span></p>
                            <div className="bg-stone-200 px-6 py-5 rounded-md">
                                <p>Order Price: ${order.orderPrice}</p>
                                <p>Priority Price: ${order.priorityPrice}</p>
                                <p className="font-bold">Total: ${order.orderPrice + order.priorityPrice}</p>
                            </div>
                        </div>
                    </div>
                </OrderItem>
                <ul className="divide-y">
                    <p className="mb-2 underline underline-offset-4">Pizzas</p>
                    {order.cart.map(item => (
                        <OderPizzaItem key={item.pizzaId} pizza={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export const loader = async ({ params }) => {
    const order = await getOrder(params.orderId);
    return order;
}

export default Order;
