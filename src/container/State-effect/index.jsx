import React, { Component, useState, useEffect } from 'react'

// class State extends Component {
//   state = {
//     count: 0,
//     size: {
//       width: document.documentElement.clientWidth,
//       height: document.documentElement.clientHeight
//     }
//   }

//   onResize = () => {
//     this.setState({
//       size: {
//         width: document.documentElement.clientWidth,
//         height: document.documentElement.clientHeight
//       },

//     })
//   }

//   componentDidMount() {
//     document.title = this.state.count

//     window.addEventListener('resize', this.onResize, false)
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.onResize, false)
//   }

//   componentDidUpdate() {
//     document.title = this.state.count
//   }

//   render() {
//     const { count, size } = this.state;
//     return (
//       <>
//         <button
//           type="button"
//           onClick={() => this.setState({ count: count + 1 })}
//         >
//           Press2（{count}）
//           size ({size.width}) ({size.height})
//         </button>
//       </>
//     )
//   }
// }

function State(props) {
  // const [count, setCount] = useState(props.defaultCount || 0);
  // 初始化默认值
  // const [count, setCount] = useState(() => {
  //   return props.defaultCount || 0
  // })

  const [count, setCount] = useState(0)
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }

  // 每次渲染之后执行，componentDidMount,componentDidUpdate.....
  useEffect(() => {
    document.title = count
  })

  // 传入空数组，只能运行一次
  useEffect(() => {
    window.addEventListener('resize', onResize, false)

    // componentWillUnmount相当于组件卸载生命周期事件
    return () => {
      window.addEventListener('resize', onResize, false)
    }
  }, [])

  // 只有[]里面定义的所有state都不改变时，useEffect才不执行
  // useEffect(() => {
  //   console.log(`count: ${count}`)
  // }, [count])

  const onClick = () => {
    console.log('click')
  }

  // 这里切换#size的节点后，click事件无法绑定到新的节点上
  // useEffect(() => {
  //   document.querySelector('#size').addEventListener('click', onClick, false)
  // }, [])
  useEffect(() => {
    document.querySelector('#size').addEventListener('click', onClick, false)

    return () => {
      document
        .querySelector('#size')
        .removeEventListener('click', onClick, false)
    }
  })

  return (
    <>
      <button type="button" onClick={() => setCount(count + 1)}>
        Press2（{count}）
      </button>

      {/* 奇偶数切换节点 */}
      {count % 2 ? (
        <span id="size">
          size ({size.width}) ({size.height})
        </span>
      ) : (
        <p id="size">
          size ({size.width}) ({size.height})
        </p>
      )}
    </>
  )
}

export default State
