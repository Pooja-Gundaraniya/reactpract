import React from 'react'

const Data = (props) => {
    return (
        <div>
            {/* <li> */}
                <button className="i" onClick={()=>{props.onselect(props.id)}}>-</button>
                {props.text}
           {/* </li> */}
        </div>
    )
}
export default Data;
