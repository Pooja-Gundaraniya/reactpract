import React, { useReducer } from "react";
// import Home from "../bootstrap/home";

const reducer = (state, action) => {
    switch (action.type) {
        case "incre":
            return { count: state.count + 1, showText: state.showText }
        case "toggle":
            return { count: state.count, showText: !state.showText };
        default:
            return state;
    }
};

const Hooks = () => {
    // const[value,setValue]=useState(0);
    // const[showText,setShowText]=useState(false);
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: "true" });

    return (
        <>
            <h1>
                {state.count}
            </h1>
            <button onClick={() => {
                dispatch({ type: "incre" });
                dispatch({ type: "toggle" });
            }}
            >click</button>
            {state.showText&&<p>this is a text</p>}
        </>
    )
}
export default Hooks;