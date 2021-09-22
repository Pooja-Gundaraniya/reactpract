// import react from "react";
import { useState } from "react";
import Todolist from "./todolist";

const Home = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const ListOfItems = () => {
        setItems((olditems) => {
            return [...olditems, inputList];
        });
        setInputList([]);
    };
    const deleteitem =(id)=>{
        setItems((olditems)=>{
            return olditems.filter((arrElem,index)=>{
                return index!==id;
            })
        })
    }
    
    return (
        <>
            <div className='main_div'>
                <div classname='center_div'>
                    <h1 className='h1'>To Do List</h1>
                    <div>
                        <input value={inputList} type='text' placeholder='Add a Items' className='input' onChange={itemEvent}></input>
                        <button className='button' onClick={ListOfItems}>+</button>
                    </div>
                    <ol >
                        {items.map((itemval,index) => {
                            return <Todolist key={index} id={index} text={itemval} onSelect={deleteitem}/>
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default Home;