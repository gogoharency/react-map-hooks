import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx';
import AppLazy from './AppLazy.jsx';
import AppMemo from './AppMemo.jsx';
import contextType from './contextType.jsx';
import State from './container/State-effect/index.jsx';
import HooksContext from './container/hooks-context/index.jsx';
import UseMemo from './container/usememo-callback/UseMemo.jsx';
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Route exact path="/" component={App} />

      <Route path="/contextType" component={contextType} />
      <Route path="/context" component={App2} />
      <Route path="/AppLazy" component={AppLazy} />
      <Route path="/AppMemo" component={AppMemo} />
      <Route path="/State" component={State} />
      <Route path="/HooksContext" component={HooksContext} />
      <Route path="/UseMemo" component={UseMemo} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
