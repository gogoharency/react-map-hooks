import React, { Component, createContext } from 'react'
import { Link } from "react-router-dom";
import { createHashHistory,createBrowserHistory } from 'history';

import './App.css'
const history = createBrowserHistory();

// const BatteryContext = createContext() // 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。
// const OnlineContext = createContext()

// class Leaf extends Component {
//   render() {
//     return (
//       <BatteryContext.Consumer>
//         {(battery) => (
//           <OnlineContext.Consumer>
//             {(online) => (
//               <h1>
//                 Battery: {battery}, Online: {String(online)}
//               </h1>
//             )}
//           </OnlineContext.Consumer>
//         )}
//       </BatteryContext.Consumer>
//     )
//   }
// }

// class Middle extends Component {
//   render() {
//     return <Leaf />
//   }
// }

// class App extends Component {
//   state = {
//     online: false,
//     battery: 60,
//   }

//   render() {
//     const { battery, online } = this.state
//     return (
//       <BatteryContext.Provider value={battery}>
//         <OnlineContext.Provider value={online}>
//           <button
//             type="button"
//             onClick={() => this.setState({ battery: battery - 1 })}
//           >
//             Press
//           </button>

//           <button
//             type="button"
//             onClick={() => this.setState({ online: !online })}
//           >
//             Switch
//           </button>
//           <Middle />
//         </OnlineContext.Provider>
//       </BatteryContext.Provider>
//     )
//   }
// }

// export default App
class App extends Component {
  goapp = () => {
    history.push('/');
  }
  render() {
    return (
      <div className="App">

          <div onClick={this.goapp}>211312</div>
          <Link to="/context" style={{ color: 'black' }}>
            <div>点击跳转到context</div>
          </Link>
          <Link to="/contextType" style={{ color: 'black' }}>
            <div>点击跳转到contextType</div>
          </Link>
          <Link to="/AppLazy" style={{ color: 'black' }}>
            <div>点击跳转到lazy</div>
          </Link>
          <Link to="/AppMemo" style={{ color: 'black' }}>
            <div>点击跳转到AppMemo</div>
          </Link>
          <Link to="/State" style={{ color: 'black' }}>
            <div>点击跳转到State-effect</div>
          </Link>
          <Link to="/HooksContext" style={{ color: 'black' }}>
            <div>点击跳转到HooksContext</div>
          </Link>
          <Link to="/UseMemo" style={{ color: 'black' }}>
            <div>点击跳转到UseMemo</div>
          </Link>


        
       
      </div>
    )
  }
}

export default App
