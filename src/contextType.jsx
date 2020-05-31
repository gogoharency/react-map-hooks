import React, { Component, createContext } from 'react'
import { BatteryContext, OnlineContext } from './createContext.js'
import Child from './contextTypeChild.jsx'
import logo from './logo.svg'
import './App.css'

// 只能获取单一context 的值
class Leaf extends Component {
  static contextType = BatteryContext

  render() {
    const battery = this.context
  return <h1>Battery_context: {battery}</h1>
  }
}

class Middle extends Component {
  render() {
    return <Leaf></Leaf>
  }
}

class App extends Component {
  state = {
    online: false,
    battery: 60,
  }

  render() {
    const { battery, online } = this.state

    return (
      <BatteryContext.Provider value={battery}>
        <OnlineContext.Provider value={online}>
          <button
            type="button"
            onClick={() => this.setState({ battery: battery - 1 })}
          >
            Press_context
          </button>

          <button
            type="button"
            onClick={() => this.setState({ online: !online })}
          >
            Switch_context
          </button>
          <Child />
          <Middle />
        </OnlineContext.Provider>
      </BatteryContext.Provider>
    )
  }
}

export default App
