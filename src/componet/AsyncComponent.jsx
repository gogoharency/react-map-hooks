import React, {Component, useState, useEffect} from "react"

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      }
    }

    componentDidMount() {
      importComponent().then((mod) => {
        this.setState({
          component: mod.default
        })
      })
    }

    render() {
      const C = this.state.component;
      console.log(this.props)
      return C ? <C {...this.props} /> : null
    }
  }

  return AsyncComponent
}
// let C;
// export default function asyncComponent(importComponent) {
//   function AsyncComponent (props) {
//     const [component, setComponent] = useState(null)
//     useEffect(() => {
//       importComponent().then((mod) => {
//         console.log(3131)
//         // this.setState({
//         //   component: mod.default
//         // })
//         setComponent(mod.default)
//         C = mod.default
//       })
//     }, [])
//     console.log(<C {...props} />)
//     return component ? <C {...props} /> : null
    

//   }
//   return AsyncComponent
// }