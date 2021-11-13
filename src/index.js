import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import './App.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <p>
      App coded by{" "}
      <a
        href="https://practical-mccarthy-a702d1.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Niamh Brown
      </a>{" "}
      | open-sourced on{" "}
      <a
        href="https://github.com/NiamhBrown/react-weather"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </p>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
