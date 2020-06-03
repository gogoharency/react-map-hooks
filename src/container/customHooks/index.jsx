import React, {
  PureComponent,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef
} from 'react'

// class Counter extends PureComponent {
//   render() {
//     const { props } = this
//     return <div>{props.count}</div>
//   }
// }
function useCounter(count) {
  return (
    <div>{count}</div>
  )
}

function useSize() {
  
}

function useCount(defaultCount) {
  const [count, setCount] = useState(defaultCount)
  let it = useRef()

  useEffect(() => {
    it.current = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)

  }, [])

  useEffect(() => {
    if (count > 10) {
      clearInterval(it.current)
    }
  }, [count, it])

  return [count, setCount]
}

function UseRef(props) {
  const [count, setCount] = useCount(0)
  const Counter = useCounter(count)

  return (
    <>
      <button type="button" onClick={() => setCount(() => count + 1)}>
        Press2（{count}）
      </button>
      {/* <Counter count={count} /> */}
      {Counter}
    </>
  )
}

export default UseRef
