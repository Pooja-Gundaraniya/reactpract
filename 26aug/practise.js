   import axios from "axios";
   const array =[{
      noun : 'pooja',
      age : 27
   },{
      noun : 'neel',
      age : 27
   },{
      noun: 'vaidehi',
      age : 26
   },{
      noun : 'karan',
      age : 15
   }];

   //for each
   console.log("foreach");
   array.forEach(value=>{console.log(value.noun)}); // for each method

   // some
   console.log("some");
   const b =array.some(array =>array.noun === 'pooja');
   console.log(b);

   // for find given vaue is in array or not
   //includes
   console.log("include");
   let num=[1,2,3,4,5,6,7,7,1];
   const a = num.includes(2);
   console.log(a);

   //filter
   console.log("filter");
   console.log(array);
   const arrayfilter = array.filter(array => array.age >18);
   console.log(arrayfilter);

   console.log("filter number");
   const a2 = num.filter(num=>num<4);
   console.log(a2);  

   //map
   console.log("map");
   const a3 = num.map(num => num+2);
   console.log(a3);

   const a4 = array.map(array => array.age+3 );
   console.log(a4);

   //reduce
   console.log("reduce");
   const a5= num.reduce((total,value)=>total+value);
   console.log(a5);

   //every
   console.log("every");
   const ba =array.every(array =>array.noun === 'pooja');
   console.log(ba);
   
   //sort
   console.log("sort");
   const bc= num.sort();
   console.log(bc);
   const cc =num.sort((a,b)=>a>b?-b:a);
   console.log(cc);
   
   // array.from
   console.log("array from");
   const cb="Pooja Gundaraniya";
   const cdarray=Array.from(cb);
   console.log(cdarray);