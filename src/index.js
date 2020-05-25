import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx';
import context from './contextType.jsx';
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Route exact path="/" component={App} />

      <Route path="/contextType" component={context} />
      <Route path="/context" component={App2} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
