import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './index.css'
import AsyncComponent from "./componet/AsyncComponent.jsx";
import App from './App.jsx'
import AppMemo from './AppMemo.jsx'
import contextType from './contextType.jsx'
import State from './container/State-effect/index.jsx'
import HooksContext from './container/hooks-context/index.jsx'
import UseMemo from './container/usememo-callback/UseMemo.jsx'
import customHooks from './container/customHooks/index.jsx'
import * as serviceWorker from './serviceWorker'
import LazyAbout from './LazyAbout.jsx'

const AppLazy = lazy(() =>
  import(/* webpackChunkName: "LazyAbout" */ './AppLazy.jsx')
)
const App2 = AsyncComponent(() => import("./App2.jsx"));
const UseRef = AsyncComponent(() => import("./container/Ref-hooks/index.jsx"));
console.log(UseRef)


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App} />

      <Route path="/contextType" component={contextType} />
      <Route path="/context" component={App2} />
      <Suspense fallback={<LazyAbout></LazyAbout>}>
        <Route path="/AppLazy" component={AppLazy} />
      </Suspense>
      <Route path="/AppMemo" component={AppMemo} />
      <Route path="/State" component={State} />
      <Route path="/HooksContext" component={HooksContext} />
      <Route path="/UseMemo" component={UseMemo} />
      <Route path="/UseRef" component={UseRef} />
      <Route path="/customHooks" component={customHooks} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
