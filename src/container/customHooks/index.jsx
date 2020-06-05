import React, {
  PureComponent,
  memo,
  useState,
  useEffect,
  useCallback,
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

// const useCounter = memo(function useCounter(count) {
//   const size = useSize()
//   return <div>{count}+{size.width}x{size.height}</div>
// })

function useSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  // 这样写每次状态改变，onResize函数都会重新跟新
  // const onResize = () => {
  //   console.log(31)
  //   setSize({
  //     width: document.documentElement.clientWidth,
  //     height: document.documentElement.clientHeight,
  //   })
  // }

  const onResize = useCallback(() => {
    console.log(31)
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }, [])

  useEffect(() => {
    console.log(33331)
    window.addEventListener('resize', onResize, false)

    return () => {
      window.addEventListener('resize', onResize, false)
    }
  }, [onResize])

  return size
}

function useCount(defaultCount) {
  const [count, setCount] = useState(defaultCount)

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
