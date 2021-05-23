import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CartProvider} from './store/Context'


// importing bootstrap minified css,With this, we can go ahead using the built-in Bootstrap classes in our React app components.
import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap javascripts components
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
    
    <CartProvider>  {/* the parent comp*/}
      <App/>   {/* the child comp to access context value*/}
    </CartProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
