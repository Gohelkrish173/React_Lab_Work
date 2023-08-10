import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import X from './funcComponent';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
const demo=" Hello World From Jsx";
root.render(
  <React.StrictMode>
    {/* <App /> */}
    
    {/* basic print hello world in react */}
    <h1>Hello World</h1>

    {/* use of jsx  */}
    <h1>{demo}</h1>
      
      {/* function component */}
      <X name='function'/>

  </React.StrictMode>
);


// {/* class component */}

// class Wellcome extends React.Component{
//   render(){
//     return(<><h1>Hello World From Class Component</h1></>);
//   }
// }

// root.render(<Wellcome />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
