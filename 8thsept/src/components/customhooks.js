// import react from "react";
import React , { useState } from "react";
import useCounter from "./useCounter";
 
export default function UseCustomhooks()
{
  const [counter,incre,decre]= useCounter(0);

    return (
        <>
        {counter}        
        <div>
        <button onClick={incre}>Increment</button>
        <button onClick={decre}>Decrement</button> 
        </div>
        </>
    );
}
