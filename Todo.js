import React, { useState } from "react";

export default function Todo() {
    const [setN] = useState(0);
    return (
        <>
            <h1>Todo App</h1>
            <form>
                <div>what you want to do today</div>
                <input type="text" />
                <button
                    onClick={(event) => setN(event.preventDefault())}>submit</button>
            </form>
        </>
    );
}