const pizzas = [
    { name: 'Pepperoni', toppings: ['pepperoni']},
    { name: 'Hawaiian', toppings: ['ham', 'pineapple']},
    { name: 'Meat Lovers', toppings: ['sausage', 'bacon', 'ham', 'pepperoni']},
    { name: 'Veggie', toppings: ['mushrooms', 'onions', 'peppers']},
    { name: 'Supreme', toppings: ['pepperoni', 'sausage', 'mushrooms', 'onions', 'peppers']},
    { name: 'BBQ Chicken', toppings: ['bbq sauce', 'chicken', 'onions']},
    { name: 'Buffalo Chicken', toppings: ['buffalo sauce', 'chicken', 'blue cheese']},
    { name: 'Margherita', toppings: ['tomato', 'basil', 'mozzarella']}
]

function Home() {
    return (
        <div>
            <h1>Welcome to Pizza Joint</h1>
            <p>
                Enjoy the best pizza in the world!
            </p>
            <Counter />
            <h2>Menu</h2>
            <ul>
                {pizzas.map(pizza => (
                    <li key={pizza.name}>{pizza.name}</li>
                ))};
            </ul>
        </div>
    );
}


const Counter = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h3>Counter</h3>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Subtract</button>
        </div>
    );
};