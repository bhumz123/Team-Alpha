import React from 'react'
import { Link } from 'react-router-dom'
import './studentcard.css'
const StudentCard = (props) => {
  return (
    <Link to='/teacher' className='student-links'>
      <div className='student-card'>
          <div><img src="//unsplash.it/500/500" alt="" />
          <div>
              <h2>{props.name}</h2>
              <p>{props.grade}</p>
          </div>
          </div>
      </div>
    </Link>
  )
}

export default StudentCard