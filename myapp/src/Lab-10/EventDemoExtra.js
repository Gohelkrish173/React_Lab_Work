import React from "react";

const EDX = () => {
  
  const E = ()=>{
    return (
      <>
        <h1>Clicked</h1>
      </>
    );
  }

  return(
    <>
      <button onClick={E}>Click</button>
      {isClicked}
    </>
  )
}

export default EDX;