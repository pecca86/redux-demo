const { readFileSync } = require('fs');
const { createServer } = require('http');
const { parse } = require('url');
const { renderToString } = require("react-dom/server");
const React = require("react");

// JSX
const pizzas = [
    { name: 'Pepperoni', toppings: ['pepperoni'] },
    { name: 'Hawaiian', toppings: ['ham', 'pineapple'] },
    { name: 'Meat Lovers', toppings: ['sausage', 'bacon', 'ham', 'pepperoni'] },
    { name: 'Veggie', toppings: ['mushrooms', 'onions', 'peppers'] },
    { name: 'Supreme', toppings: ['pepperoni', 'sausage', 'mushrooms', 'onions', 'peppers'] },
    { name: 'BBQ Chicken', toppings: ['bbq sauce', 'chicken', 'onions'] },
    { name: 'Buffalo Chicken', toppings: ['buffalo sauce', 'chicken', 'blue cheese'] },
    { name: 'Margherita', toppings: ['tomato', 'basil', 'mozzarella'] }
]

function Home() {
    return (
        <>
            <h1>Welcome to Pizza Joint</h1>
            <p>
                Enjoy the best pizza in the world!
            </p>
            <Counter />
            <h2>Menu</h2>
            <ul>
                {pizzas.map(pizza => (
                    <li key={pizza.name}>{pizza.name}</li>
                ))}
            </ul>
        </>
    )
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
// END JSX

const htmlTemplate = readFileSync(`${__dirname}/index.html`, 'utf8');
const clientJs = readFileSync(`${__dirname}/client.js`, 'utf8');

const server = createServer((req, res) => {
    const pathName = parse(req.url).pathname;

    if (pathName === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlTemplate);
    } else if (pathName === '/about') {
        const rendered = renderToString(<Home />);
        const html = htmlTemplate.replace('{{content}}', rendered);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    } else if (pathName === '/client.js') {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(clientJs);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
    }


});

server.listen(8000, () => {
    console.log('Server started at http://localhost:8000');
});

