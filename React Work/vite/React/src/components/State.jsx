import { useState } from 'react';

function State() {
    const [total, setTotal] = useState(0);
    const [color, setColor] = useState('');

    return (
        <div>
            <button onClick={() => setTotal(total + 1)}>Add</button>
            <button onClick={() => setTotal(total - 1)}>Subtract</button>
            <h1>{total}</h1>

            <button onClick={() => setColor('red')}>Red</button>
            <button onClick={() => setColor('blue')}>Blue</button>
            <button onClick={() => setColor('green')}>Green</button>
            <button onClick={() => setColor('Violet')}>Violet</button>
            <button onClick={() => setColor('black')}>Black</button>

            <h1>
                My favorite color is <span style={{ color: color }}>{color}</span>
            </h1>
        </div>
    );
}

export default State;