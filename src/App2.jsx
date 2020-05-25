import React, { Component, createContext } from 'react'
import logo from './logo.svg'
import './App.css'

const BatteryContext = createContext() // 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。
const OnlineContext = createContext()

class Leaf extends Component {
  render() {
    return (
      <BatteryContext.Consumer>
        {(battery) => ( // battery获取Provider的value值，可能是对象
          <OnlineContext.Consumer>
            {(online) => (
              <h1>
                Battery2: {battery.battery}, Online: {String(online)}
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
      <BatteryContext.Provider value={this.state}>
        <OnlineContext.Provider value={online}>
          <button
            type="button"
            onClick={() => this.setState({ battery: battery - 3 })}
          >
            Press2
          </button>

          <button
            type="button"
            onClick={() => this.setState({ online: !online })}
          >
            Switch2
          </button>
          <Middle />
        </OnlineContext.Provider>
      </BatteryContext.Provider>
    )
  }
}

export default App
