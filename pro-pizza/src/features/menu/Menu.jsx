import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from 'react-router-dom';
import MenuItem from "./MenuItem";

const Menu = () => {
    const menu = useLoaderData();
    
    return (
        <div className="divide-y-2 divide-gray-200" >
            {menu.map(pizza => <MenuItem key={pizza.id} pizza={pizza} />)}
        </div>
    );
}

export const loader = async () => {
    const menu = await getMenu();
    return menu;
}

export default Menu;

