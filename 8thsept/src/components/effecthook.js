import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Effecthooks =() => {
    const[num,setNum]=useState(0);
    useEffect(()=>{alert("i am clicked");})
    const IncNum=()=>
    {
        setNum(num+2);
    };
    return(
        <>
        <button onClick={IncNum}> click me{num}</button>
        </>
    );
};
export default Effecthooks;