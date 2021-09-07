import React from "react";
// export default function Namelist()
// {
//     const names=['pooja','neel','vaidehi','maitri','pooja']
// return(
//     <>
//     {
//         names.map((name,i)=><ul key={i}>{i}{name}</ul>)
//     }
//     </>
// )
// }
const NameList=()=>
{
    const [name,setName]=React.useState("");
    const [fname,setfname]=React.useState("");
    const InputEvent=(event)=>{
        // console.log(event.target.value);
        setName(event.target.value);
    }
    const mergeText = () =>
    {
        setfname(name);
    }
  

    
    return(
    <>
    <div>
    <h1>hello{fname}</h1>
    <br/>
    <input type="text" placeholder="enter your name" onChange={InputEvent} value={name}/>
    <br/>
    <button onClick={mergeText}>click me</button>
    </div>
    </>
    )
}
export default NameList;