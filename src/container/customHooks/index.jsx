import React, {
  PureComponent,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  memo,
} from 'react'

// const Counter = memo(function Counter(props) {
//   console.log('Counter Render')
//   return <div onClick={props.onClick}>{props.count}</div>
// })

class Counter extends PureComponent {
  speak() {
    console.log('this Counter class of props')
  }
  render() {
    const { props } = this
    return <div onClick={props.onClick}>{props.count}</div>
  }
}
let tt;

function UseRef(props) {
  const [count, setCount] = useState(0)
  const [ClickCount, setClickCount] = useState(0)
  const counterRef = useRef()
  let it = useRef()
  let ff = useRef()
  // let tt // 不可作为定时器的赋值选择，因为每次函数组件状态变更，都会重新定义tt变量的值，可以使用useRef定义，或者在函数外定义tt

  const double = useMemo(() => {
    return count * 2
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count === 3])

  const half = useMemo(() => {
    return double / 4
  }, [double])

  const onClick = useCallback(() => {
    console.log('click')
    console.log(ff.current)
    setClickCount(ClickCount + 1)
    // 对于组件，Ref不能拿到函数组件的dom，只能拿class组件的dom，普通html的dom不受限制
    counterRef.current.speak()
  }, [ClickCount, counterRef])

  useEffect(() => {
    // 推荐使用
    it.current = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)

    // 不推荐使用
    // tt= setInterval(() => {
    //   setCount((count) => count + 1)
    // }, 1000)
  }, [])

  useEffect(() => {
    if (count > 10) {
      // 可以用来保存状态，方法，节点。。。。。。。
      ff.current = count
      clearInterval(it.current)
      // clearInterval(tt)
    }
  }, [count, it])

  return (
    <>
      <button type="button" onClick={() => setCount(count + 1)}>
        Press2（{count}）Double（{double}）Half（{half}）
      </button>
      {/* <Counter count={count} /> */}
      <Counter ref={counterRef} count={double} onClick={onClick} />
    </>
  )
}

export default UseRef
