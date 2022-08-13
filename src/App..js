import React from 'react';
import { useState } from 'react';

function App() {
    const d = new Date().toLocaleTimeString();
    const [time, setTime] = useState(d);

    const updateTime = () => {
        let t = new Date().toLocaleTimeString();
        setTime(t);
    };
    setInterval(updateTime, 1000);

    return ( <
        >
        <
        h1 > { time } < /h1> <
        />
    )
};
export default App;