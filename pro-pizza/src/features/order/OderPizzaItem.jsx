/* eslint react/prop-types: 0 */
const OderPizzaItem = ({pizza, ingredients, isLoadingIngredients}) => {
    return (
        <li className="mb-2 py-1">
            <h2 className="text-md">{pizza.name} x {pizza.quantity} a {pizza.unitPrice}€</h2>
            {isLoadingIngredients && <p>Loading ingredients...</p>}
            <p className="text-sm italic">{ingredients?.join(', ')}</p>

        </li>
    );
}

export default OderPizzaItem;
