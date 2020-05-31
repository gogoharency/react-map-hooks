import React, { Component, useState, createContext, useContext } from 'react'

const CountContextHooks = createContext()

class Foo extends Component {
  render() {
    return (
      <CountContextHooks.Consumer>
        {(count) => <h1>Count2: {count}</h1>}
      </CountContextHooks.Consumer>
    )
  }
}

class FooContextType extends Component {
  static contextType = CountContextHooks
  render() {
    const count = this.context
    return <h1>CountContextType: {count}</h1>
  }
}

function UseContext() {
  const count = useContext(CountContextHooks)
  return <h1>UseContext: {count}</h1>
}

function UseMemo(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <button type="button" onClick={() => setCount(count + 1)}>
        Press2（{count}）
      </button>
      <CountContextHooks.Provider value={count}>
        <Foo />
        <FooContextType />
        <UseContext />
      </CountContextHooks.Provider>
    </>
  )
}

export default UseMemo
