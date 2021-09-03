// import react  from 'react';
// import Restaurant from './component/basics/restaurant';
// import Menu from "../src/component/basics/menuapi";
// import  MenuCard  from "../src/component/basics/menucard";
// const app = () =>
// {
//   return(
//     <>
//     <Nested />
//     welcome to webelight {3+3}
//     <h1>hello world</h1>
//     <Nested/>
//     </>
//   )
// };

// export default app;

// const Nested = () =>
// {
//   return <h1>this is nested Comp</h1>;
// };
import React from 'react'
// import Test from './component/test';

const App = () => {
  return (
    <><h1>NETFLIX SERIES</h1>
    <p>here is some SERIES of latest top 10 </p>
    <Sorts/>
     {/* <Restaurant/>
     <MenuCard MenuData={Menu}/>
     <Test data={Menu}/> */}
    </>
  )
}
export const Sorts =() =>
  {
    const arr=['Dark','Money heist','Peaky blinders',"vikings",'game of thrones'];
    // const arr2=arr.sort();
    return( 
      arr.map((array)=>{
        return <ol>{array}</ol>
      })
   
    )
  }
  export default App;