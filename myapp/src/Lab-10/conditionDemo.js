import React from "react";

const ConditionDemo = (props) =>{
  const isDisplay = props.name;
  return(
    <>
      {isDisplay && <h1>True</h1>}
    </>
  );
}

export default ConditionDemo;