import React from "react";

const DemoProps = (Props) =>{
  return(
    <>
      <h1>Demo Of Props from {Props.name} </h1>
      <h2>Hello World</h2>
      <h3>{Props.FullName}</h3>
    </>
  );
}

export default DemoProps;