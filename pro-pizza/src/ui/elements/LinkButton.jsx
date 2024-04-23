/* eslint react/prop-types: 0 */

import { Link, useNavigate } from 'react-router-dom';

const LinkButton = ({ children, to, navigateBack }) => {
    const navigate = useNavigate();

    if (navigateBack) {
        return (
            <button
                onClick={() => navigate(-1)}
                className="bg-black text-stone-200 p-2 mt-2 rounded-lg hover:bg-white hover:text-stone-950 transition-colors duration-500 hover:border hover:ring-stone-500">
                {children}
            </button>
        );
    }

    return (
        <Link to={to} className="bg-black text-stone-200 p-2 mt-2 rounded-lg hover:bg-white hover:text-stone-950 transition-colors duration-500 hover:border hover:ring-stone-500">
            {children}
        </Link>
    );
}

export default LinkButton;
