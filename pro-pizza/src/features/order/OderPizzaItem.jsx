/* eslint react/prop-types: 0 */
const OderPizzaItem = ({pizza}) => {
    return (
        <li className="mb-2 py-1">
            <h2 className="text-sm">{pizza.name} x {pizza.quantity} a {pizza.unitPrice}€</h2>
        </li>
    );
}

export default OderPizzaItem;
