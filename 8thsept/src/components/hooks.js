import React,{useState} from 'react';


const Hooks = () => {
    const [counts, setCount] = useState(0);

    const IncNum = () => {
    
        console.warn("clicled");
        // console.log(counts);
        setCount(counts+1);
    
    }

    return (
        <>{counts}
            <button onClick={IncNum}>clickme</button>
        </>
    );
}
export default Hooks;