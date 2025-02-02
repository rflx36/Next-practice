"use client";
import { useState } from "react";



export const CounterComponent = () => {
    console.log("Counter Component");
    const [count, setCount] = useState(0);


    return (
        <button className="bg-green-500/20 border px-2 py-1 rounded-md border-green-500" onClick={() => setCount(count + 1)}> Clicked {count} times</button>
    )
}