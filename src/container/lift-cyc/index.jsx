import React, { useState, useEffect } from 'react'

function Liftcyc(props) {
  const [overflow, setOverflow] = useState(0)

  // static getDerivedStateFromProps(props,state) {
  //   if (props.count>10) {
  //     return {
  //       overflow: true
  //     }
  //   }
  // }
  if (props.count>10) {
    setOverflow(true)
  }

  useEffect(() => {
    // componentDidMount
    return () => {
      // componentWillUnmount
    }
  }, [])

  // useEffect(() => {
  //   // componentDidUpdate
    
  // }, [...])



  return (
    <>
      <button type="button">
        Press2（{String(overflow)}）
      </button>

    
    </>
  )
}

export default Liftcyc
