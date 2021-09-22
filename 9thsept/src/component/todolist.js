import React from 'react'

const Todolist = (props) => {
    

    return(
        <>
        <div>
         <li><button className='i' onClick={()=>{props.onSelect(props.id)}}>-</button>
         {props.text} </li>
        </div>
        </>
    )
};
export default Todolist;