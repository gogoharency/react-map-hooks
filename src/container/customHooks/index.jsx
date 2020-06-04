import React, {
  PureComponent,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react'

// class Counter extends PureComponent {
//   render() {
//     const { props } = this
//     return <div>{props.count}</div>
//   }
// }
function useCounter(count) {
  const size = useSize()
  return <div>{count}+{size.width}x{size.height}</div>
}

function useSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  // const onResize = () => {
  //   setSize({
  //     width: document.documentElement.clientWidth,
  //     height: document.documentElement.clientHeight,
  //   })
  // }

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize, false)

    return () => {
      window.addEventListener('resize', onResize, false)
    }
  }, [onResize])

  return size
}

function useCount(defaultCount) {
  const [count, setCount] = useState(defaultCount)
  let it = useRef()

  return [count, setCount]
}

function UseRef(props) {
  const [count, setCount] = useCount(0)
  const Counter = useCounter(count)
  const size = useSize()

  const onClick = () => {
    setCount(() => {
      return count + 1
    })
  }

  return (
    <>
      <button type="button" onClick={onClick}>
        Press2（{count}）{size.width}x{size.height}
      </button>
      {/* <Counter count={count} /> */}
      {Counter}
    </>
  )
}

export default UseRef
