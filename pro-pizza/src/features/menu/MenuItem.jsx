/* eslint react/prop-types: 0 */
import Button from "../../ui/elements/Button";

const MenuItem = ({ pizza }) => {
    return (
        <div className="flex gap-4">
            <img src={pizza.imageUrl} alt={pizza.name} className="h-24" />
            <div className="flex flex-col flex-grow">
                <p className="text-xl mb-2">{pizza.name}</p>
                <p className="italic">{pizza.ingredients.join(', ')}</p>
                <p className="text-red-500 mt-auto">{pizza.soldOut ? 'Sold out!' : (<Button type={'primary'} size={'small'}>{'Add to cart ' + pizza.unitPrice + ' €'}</Button>)}</p>
            </div>
        </div>
    );
}

export default MenuItem;
