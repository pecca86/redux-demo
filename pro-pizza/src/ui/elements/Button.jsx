/* eslint react/prop-types: 0 */

const Button = ({ children, type, size }) => {

    const baseStyle = {
        primary: 'bg-yellow-500 uppercase text-stone-100 inline-block tracking-wider rounded-xl hover:text-stone-800 transition-colors duration-500 focus:outline-none focus:ring focus:ring-stone-500',
        secondary: 'bg-blue-300 uppercase text-stone-100 inline-block tracking-wider rounded-xl hover:text-stone-800 transition-colors duration-500 focus:outline-none focus:ring focus:ring-stone-500',
        danger: 'bg-red-300 uppercase text-stone-100 inline-block tracking-wider rounded-xl hover:text-stone-800 transition-colors duration-500 focus:outline-none focus:ring focus:ring-stone-500',
        small: 'bg-yellow-500 uppercase text-stone-100 inline-block tracking-wider rounded-xl hover:text-stone-800 transition-colors duration-500 focus:outline-none focus:ring focus:ring-stone-500'
    };

    const sizes = {
        small: 'p-1 mb-1',
        medium: 'p-2 mb-1',
        large: 'p-3 mb-1',
        xlarge: 'p-4 mb-1'
    };

    return (
        <button className={baseStyle[type] + " " + sizes[size]}>
            {children}
        </button>
    );
}

export default Button;
