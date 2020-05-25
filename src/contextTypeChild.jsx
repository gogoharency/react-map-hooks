import React, { Component } from 'react'
import { BatteryContext } from './createContext.js'

class Child extends Component {
  // static contextType = BatteryContext // Child.contextType = BatteryContext;二选一

  render() {
    const battery = this.context
    return <h1>Battery_context: {battery}</h1>
  }
}
Child.contextType = BatteryContext;
export default Child;