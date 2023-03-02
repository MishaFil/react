import React, {useState} from 'react';

const Counter = () => {
    const [currentN, setCurrentN]= useState('1')
    const [state,setState] = useState(0)

    const OnPlus = (value:number) => {
        setState(state=>state+value)

    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={currentN}
                    onChange={(e)=> setCurrentN(e.target.value)}
                />
                {state}
            </div>
            <div>
                <button onClick={() => OnPlus(1)}>Plus 1</button>
                <button onClick={() => OnPlus(-1)}>Minus 1</button>
                <button onClick={() => OnPlus(100)}>Plus 100</button>
                <button onClick={() => OnPlus(-100)}>Minus 100</button>
                <button onClick={() => OnPlus(parseInt(currentN))}>ТАГИЛ</button>
            </div>
        </div>
    );
};

export default Counter;