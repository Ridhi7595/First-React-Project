// var React=require('react');
// import 
// var ReactDOM=require('react-dom');

// ReactDOM.render(<h1>Hello World</h1>,document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom/client' ;
import './index.css';
import App from './App';
const rootElement=document.getElementById('root');
const root=ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
         <App/>
     </React.StrictMode>,
   // document.getElementById('root')
);
// function Main =()=>{
//     return (
//         <h1>HEllo world </h1>
//     );
// }