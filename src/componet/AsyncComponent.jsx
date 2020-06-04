import React, { Component, useState, useEffect, useMemo } from 'react'

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
// export default function asyncComponent(importComponent) {
//   function AsyncComponent(props) {
//     const [component, setComponent] = useState(null)
//     useEffect(() => {
//       importComponent().then((mod) => {
//         setComponent(mod.default)
//       })
//     }, [])

//     const C = useMemo(() => {
//       console.log(component)
//       return component
//     }, [component])

//     return C ? <C {...props} /> : null
//   }
//   return AsyncComponent
// }
