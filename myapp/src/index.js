import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoProps from './Lab-10/demoProps';
import ED from './Lab-10/EventDemo';
import ConditionDemo from './Lab-10/conditionDemo';
import DemoMap from './lab-11/DemoMap';
import EDX from './Lab-10/EventDemoExtra';
import DCC from './Lab-9/demoClassComponent';
import DFC from './Lab-9/demofunctioncomponents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <DCC/> */}
    {/* <DFC/> */}
    {/* Lab - 10 */}
    {/* <ED/> */}
    {/* <DemoProps name="krish" FullName = "gohel"/> */}
    {/* <ConditionDemo name={true} /> */}
    {/* <EDX/> */}

    {/* Lab-11 */}

    <DemoMap/>
    
  </>
);