import react from "react";
import { useState } from "react/cjs/react.development";
import Data  from "./data";

const Todo = () => {
    const[value,setValue]=useState("");
    const[item,setItem]=useState([]);

    const addItem = (event) =>{
        setValue(event.target.value);
    };
    const listItem = () => {
        setItem((olditem) =>{
            return[...olditem,value];
        });
        setValue([]);
        // document.getElementById("input").innerText="";
    };
    const deleteitem = (id) => {
        setItem((olditem) =>{
            return olditem.filter((elem,index)=>{
                return index!==id;
            })
        })
    }
    return(
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <h1 className='h1'>To Do List</h1>
                    <div>
                        <input type='text' value={value} className='input' placeholder="Add a Item" onChange={addItem}></input>
                        <button className='button' onClick={listItem}>+</button>
                    </div>
                    {/* <ol className='ol'> */}
                      {item.map((itemVal,index)=>{
                        return <Data key={index} id={index} text={itemVal} onselect={deleteitem}/>
                      })}
                    {/* </ol> */}
                </div>
            </div>
        </>
    )
}
export default Todo;