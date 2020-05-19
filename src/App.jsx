import React, { Component, createContext } from 'react'
import logo from './logo.svg'
import './App.css'

const BatteryContext = createContext() // 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。
const OnlineContext = createContext()

class Leaf extends Component {
  render() {
    return (
      <BatteryContext.Consumer>
        {(battery) => (
          <OnlineContext.Consumer>
            {(online) => (
              <h1>
                Battery: {battery}, Online: {String(online)}
              </h1>
            )}
          </OnlineContext.Consumer>
        )}
      </BatteryContext.Consumer>
    )
  }
}

class Middle extends Component {
  render() {
    return <Leaf />
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
            Press
          </button>

          <button
            type="button"
            onClick={() => this.setState({ online: !online })}
          >
            Switch
          </button>
          <Middle />
        </OnlineContext.Provider>
      </BatteryContext.Provider>
    )
  }
}

export default App
