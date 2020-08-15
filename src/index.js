import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react/App';
import Profile from './react/Profile';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={App} />
        <Route path="/Profile" exact component={Profile} />
      </div>
    </BrowserRouter> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
