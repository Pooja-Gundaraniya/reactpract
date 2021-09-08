import { useState } from "react";

export default function useCounter(){
 const[value,setValue]=useState(0);
 function incre ()
  {
    return setValue(value+1);
  }
  function decre ()
  {
    return setValue (value-1);
  }
 return[value,incre,decre];
}