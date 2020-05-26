import React, { Component} from 'react'
import logo from './logo.svg'
import './App.css'



class LazyAbout extends Component {
    componentDidMount () {
      console.log(this.props)
    }

  render() {
    
    return (
      <div>LazyAbout</div>
    )
  }
}

export default LazyAbout