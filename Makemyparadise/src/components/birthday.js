import React,{useState} from "react";
import data from "./data";
import List from "./list";

function Birthday() {
    const [people, setPeople] = useState(data)
    return (
        <section className='container'>
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
        </section>
    )
  }
  
  export default Birthday