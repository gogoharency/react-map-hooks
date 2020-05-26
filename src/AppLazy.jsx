import React, { Component, lazy, Suspense } from 'react'
import logo from './logo.svg'
import './App.css'
import ErrorBoundary from './componet/ErrorBoundary'

const LazyAbout = lazy(() =>
  import(/* webpackChunkName: "LazyAbout" */ './LazyAbout.jsx')
) //* webpackChunkName: "LazyAbout" */用来修改在浏览器加载的文件资源名

class App extends Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          {/* fallback中也可以传组建 */}
          <Suspense fallback={<div>Loading........</div>}>
            <LazyAbout></LazyAbout>
          </Suspense>
        </ErrorBoundary>
      </>
    )
  }
}

export default App
