import React, { Component, PureComponent, memo } from 'react'
import logo from './logo.svg'
import { Map } from 'immutable'
import './App.css'

// class Foo extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextProps.name === this.props.name) {
//       return false;
//     }
//     return true;
//   }
//   render() {
//     console.log('render foo')
//     return null
//   }
// }
class Foo extends PureComponent {
  // 与注释的Foo组件效果一样，shouldComponentUpdate生命周期与PureComponent

  render() {
    console.log('render foo')
    return null
  }
}

// 传入对象this.props，改变对象内部值，嵌套太深，PureComponent不会响应
class Foo2 extends PureComponent {
  render() {
    console.log('render foo2')
    return <div>{this.props.person.age}</div>
  }
}

class Foo3 extends PureComponent {
  render() {
    console.log('render foo3')
    return <div onClick={this.props.cb}>{this.props.person.age}</div>
  }
}

// React.memo 为高阶组件。它与 React.PureComponent 非常相似，但只适用于函数组件(无状态组件)，而不适用 class 组件。
const FooMemo = memo(function FooMemo(props) {
  console.log('render FooMemo')
  return <div onClick={props.cb}>{props.person.age}</div>
})

class AppMemo extends PureComponent {
  state = {
    count: 0,
    person: {
      age: 1,
    },
  }

  // 函数一直没变，所以不会造成memo，PureComponent子组件刷新
  callback = () => {this.setState({count: this.state.count + 1})}

  changeMap = () => {
    // 第一种
    const { person } = this.state
    // Map将对象改为Map格式
    const map1 = Map(person)
    // 修改或者添加新属性
    const map2 = map1.set('age1', person.age++)
    // 转化回js格式对象
    console.log(map2.toJS())

    // 第二种
    // component.forceUpdate(callback) // 强制执行render()方法

    //不建议
    // var new_arr = JSON.parse(JSON.stringify(this.state.person))
    // new_arr.age++;
    // this.setState({
    //   person: new_arr
    // })
  }

  render() {
    const { person } = this.state
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          add
        </button>
        <button
          onClick={() => {
            person.age++
            this.setState({ person })
          }}
        >
          add2
        </button>
        {/* PureComponent多层修改，浅拷贝不会使组件更新的优化方式 */}
        <button onClick={this.changeMap}>changeMap</button>
        <Foo name="Mike"></Foo>
        <Foo2 person={person}></Foo2>
        {/* 添加回掉函数后(每次都会传入新的函数)，子组件会刷新 */}
        {/* <Foo3 person={person} cb={() => {}}></Foo3> */}

        {/* 添加回掉函数后（每次传入定义好的函数），子组件不会刷新 */}
        <Foo3 person={person} cb={this.callback}></Foo3>
        <FooMemo person={person} cb={this.callback}></FooMemo>
        <div>{person.age}</div>
      </div>
    )
  }
}

export default AppMemo
