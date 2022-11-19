import React from 'react'
import './testCard.css'
const TestCard = (props) => {
  return (
    <div className='test-card'>
      <h3>{props.testName}</h3>
      <a href={props.testLink}>Take Test</a>
    </div>
  )
}

export default TestCard