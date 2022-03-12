import React, { useState } from "react";

export default function NumberGuess() {

    
    const [val, handleChange] = useState("");         
    const [num, setRandom] = useState(0);
    const [click, handleClick] = useState(false);
     
  
    return (
        <> 
            <h1>Number Guessing Game</h1>
            <div>Enter number between 0-10</div>
            <input type="text" value={val} onChange={(event) => handleChange(event.target.value)}/>

            <button onClick={() => {
                setRandom(Math.floor(Math.random() * 10));
                handleClick(true);
            }}>check</button>
            {click && <div>random number is: {num}</div>}
             

            {click && num === Number(val) && <h2>correct</h2>}
            {click && num !== Number(val) && <h2>wrong</h2>}
        </>
    );
}