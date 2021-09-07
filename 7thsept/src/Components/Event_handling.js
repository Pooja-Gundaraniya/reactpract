import React from 'react'

export const EventHandling = () => {
    const purple="#bf4080"
    const [bg,setBg] = React.useState(purple);
    const[name,setName]=React.useState('clickme')
    const bgChange=()=>{
        // console.log('clicked');
        let newBg='#74992e';
        setBg(newBg);
        setName('OUCH')
    };
    const bgBack = () =>{

    setBg(purple);
    setName("ayyyo!!")
    }

    return (
        <div style={{backgroundColor:bg}}>
            <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
            <br/>
            <button onMouseEnter={bgChange} onMouseOut={bgBack}>{name}</button>
        </div>
    )
}
