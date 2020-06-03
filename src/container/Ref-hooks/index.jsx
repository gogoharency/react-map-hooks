import React, {
  PureComponent,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  memo,
  useImperativeHandle,
  forwardRef,
} from 'react'

// hooks暴露子组件DOM,ref参数是默认在props后添加的,必须组件有暴露的对象，才会有值
function CounterRef(props, ref) {
  console.log('Counter Render')
  useImperativeHandle(ref, () => ({
    // speak 就是暴露给父组件的方法
    speak: speakClick,
  }))
  const speakClick = (newVal) => {
    console.log(newVal)
    console.log(props)
  }
  const onClick = () => {
    speakClick()
  }
  return <div onClick={onClick}>{props.count}</div>
}
// hooks暴露子组件DOm， forwardRef !!!!!!!注意memo()函数包裹的函数组件forwardRef不可使用，也就是memo包裹的纯函数组件此种方法无法获取dom节点
CounterRef = forwardRef(CounterRef)

// memo的方法
const MemoRef = memo(function MemoRef(props) {
  console.log(31312321)
  const [val, setVal] = useState(0)
  // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
  useImperativeHandle(props.cRef, () => ({
    // changeVal 就是暴露给父组件的方法
    changeVal: (newVal) => {
      setVal(newVal)
    },
  }))
  return <div onClick={props.onClick}>{val}</div>
})

// class子组件方法
class Counter extends PureComponent {
  speak() {
    console.log('this Counter class of props')
  }
  render() {
    console.log(this.props)
    const { props } = this
    return <div onClick={props.onClick}>{props.count}</div>
  }
}

// 定时器用法
let tt
function UseRef(props, rr) {
  console.log(rr)
  const [count, setCount] = useState(0)
  const [ClickCount, setClickCount] = useState(0)
  const counterRef = useRef()
  const Counter01 = useRef()
  const memoRef = useRef()
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
    console.log(ff.current)
    setClickCount(ClickCount + 1)
    // 对于组件，Ref不能拿到函数组件的dom，只能拿class组件的dom，普通html的dom不受限制
    counterRef.current.speak('9999')
    Counter01.current.speak('999943343')
  }, [ClickCount])

  const onClickmMemo = useCallback(() => {
    console.log('memoRef')
    memoRef.current.changeVal('123456789')
  }, [])

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
      <Counter ref={Counter01} count={double} onClick={onClick} />
      <CounterRef ref={counterRef} count={double} onClick={onClick} />
      <MemoRef cRef={memoRef} onClick={onClickmMemo} />
    </>
  )
}

export default UseRef
