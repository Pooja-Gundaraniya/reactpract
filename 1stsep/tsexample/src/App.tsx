import React from 'react';
import moment, { weekdays } from 'moment';
import logo from './logo.svg';
import './App.css';

function App() {

  let d = new Date;
  console.log(moment().format('DD'));
  console.log(moment().format('D'));
  console.log(d.getDate());
  console.log(d.getDay());
  console.log(moment().format("DD MMM YYYY"));
  console.log(moment().format("DD MM YYYY"));
  console.log(moment().format("MMMM/DD/YYYY"));
  console.log(moment().format("MMMM.DD.YYYY"));
  console.log(moment().format("MMMM.DD.YYYY.dddd"));
  console.log(moment().format("MMMM.DD.YYYY.dddd.hh A"));
  console.log(moment().format("MMM"));
  console.log(moment().format("MM"));
  console.log(moment().format("M"));
  console.log(moment().format("MMMM"));
  console.log(moment().format("YYYY"));
  console.log(moment().format("YY"));
  console.log(moment().format("HH:MM"));
  console.log(moment().format("HH:MM A"));
  console.log(moment().format("HH:MM:SS"));
  console.log(moment().format("HH:MM:SS A"));
  console.log(moment().isSame('2019-05-12','year')); 
  // const m:any = moment();
  // console.log(`original moment : ${m.toString}`);
  // m.add(2,"Day");
  // console.log(`after moment : ${m.toString}`);
  var startdate =new Date;
  console.log(moment(startdate, "DD-MM-YYYY").add(5, 'days'));



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
