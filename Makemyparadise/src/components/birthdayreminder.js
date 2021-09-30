import React,{useState} from "react";
import data from "./data";
import List from "./list";

const Birthday =()=>{
    const[people,setPeople]=useState(data);
    return(
        <>
        {people.length} birthdays today
        <List people={people}/>
        </>
    )
}
export default Birthday;