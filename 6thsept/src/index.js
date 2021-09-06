import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Heading,{Head} from './Heading';
// import Profile from './Profile';
// import State from './State';
import Lifecyle from './Lifecycle';

const job = "training of";
const courseName = "react JS"
const todayDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img ="../logo512.png";
let currDate = new Date(2021,9,6,20);
let greeting ="";

const cssStyle ={};

currDate = currDate.getHours();
if(currDate>=1&&currDate<12)
{
  greeting='Good Morning';
  cssStyle.color='green';
}
else if(currDate>=12&&currDate<19)
{
  greeting='Good Aftenoon';
  cssStyle.color='Orange';

}
else
{
  greeting='Good Night';
  cssStyle.color='blue';

}






ReactDOM.render(<>
{/* <Profile text={{name:" Props here"}}/> */}
  {/* <React.StrictMode>
    <App />
  </React.StrictMode>
  <Heading/><br/>
  <Head/>
<h1 className="heading" >{`welcome to ${job} ${courseName}`}</h1>
<p>{`today's Date is = ${todayDate}`}</p>
<p>{`current time is = ${currTime}`}</p>
<a href="https://reactjs.org/docs/getting-started.html" target="_blank">
<img src={img} />
</a>

<h1>hello Pooja ,<span style={cssStyle}>{greeting}</span></h1>
 */}
{/* <State/> */}
<Lifecyle/>




























</>

  ,document.getElementById('root')
);
reportWebVitals();

// var h1=document.createElement(h1)
// h1.innerHTML ="pooja";
// document.getElementById("root").appendChild(h1);