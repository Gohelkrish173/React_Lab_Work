import React from "react";

const DemoMap = () =>{
  let x1 = {
    Name : "krish",
    sem : 5
  }
  let x2 = {
    Name : "Nisarg",
    sem : 5
  }
  let x3 = {
    Name : "xyz",
    sem : 3
  }
  let x4 = {
    Name : "abc",
    sem : 1
  } 

  let x = [x1,x2,x3,x4];

  const PrintDemo = x.map((y)=>{
    return(
      <>
      <h1>Name : {y.Name}</h1>
      <h2>Sem : {y.sem}</h2> 
      <span>--------------------------------------------------</span>   
    </>
    );
  });

  return PrintDemo;
}

export default DemoMap;