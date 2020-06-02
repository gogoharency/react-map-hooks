import React, {
  PureComponent,
  useState,
  useMemo,
  useCallback,
  memo,
} from 'react'

const Counter = memo(function Counter(props) {
  console.log('Counter Render')
return <div onClick={props.onClick}>{props.count}</div>
})

function UseMemo(props) {
  const [count, setCount] = useState(0)
  const [ClickCount, setClickCount] = useState(0)

  // 第二个参数如果传[]则只运行一次
  // const double = useMemo(() => {
  //   return count * 2
  // }, [count])

  // function ff () {
  //   return count * 2
  // }
  // 当count === 3时，判断为true，double=6，再次点击double=8，count === 4时，判断为false
  const double = useMemo(() => {
    // return ff()
    return count * 2
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count === 3])

  const half = useMemo(() => {
    return double / 4
  }, [double])
  // useCallback(fn, deps)【不需要return fn】 相当于== useMemo(() => fn, deps)【相当于return fn】
  // const half = useCallback(
  //   double / 4
  // , [double])


  
  // 此时子组件会渲染,子组件props.onClick可正常调用（初始化时，不会运行）
  // const onClick = () => {
  //   console.log('click')
  // }

  ////////////////////////////////////////////////做参考用
  // 错误写法，此时子组件不会渲染,子组件props.onClick不可正常调用（初始化时，会运行）
  // const onClick = useMemo(() => {
  //   console.log('click')
  // }, [])

  // 正确写法，此时子组件不会渲染,子组件props.onClick可正常调用（初始化时，不会运行）
  // const onClick = useMemo(() => {
  //   return () => {
  //     console.log('click')
  //   }
  // }, [])
   // useCallback(fn, deps)【不需要return fn】 相当于== useMemo(() => fn, deps)【相当于return fn】
  // const onClick = useCallback(() => {
  //   console.log('click')
  // }, [])



  // 每次点击onClick函数重新获取新的ClickCount状态，函数改变，此时子组件会渲染。子组件props.onClick可正常调用（初始化时，不会运行）
  // const onClick = useCallback(() => {
  //   console.log('click')
  //   setClickCount(ClickCount + 1)
  // }, [ClickCount])
// 每次点击onClick，函数没有改变，此时子组件不会渲染。子组件props.onClick可正常调用（初始化时，不会运行）
  const onClick = useCallback(() => {
    console.log('click')
    setClickCount((ClickCount) => ClickCount + 1)
  }, [])

  return (
    <>
      <button type="button" onClick={() => setCount(count + 1)}>
        Press2（{count}）Double（{double}）Half（{half}）
      </button>
      {/* <Counter count={count} /> */}
      <Counter count={double} onClick={onClick} />
    </>
  )
}

export default UseMemo
