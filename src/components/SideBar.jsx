import React from 'react'
import './sidebar.css'
import StudentCard from './StudentCard'
import students from '../Data'
const SideBar = () => {
  return (
    <div className='sidebar'>
        <h2>Students</h2>
        {students[0].map((student)=> {
           return <StudentCard key={student.name} name={student.name} grade={student.class} />
        } )}

    </div>
  )
}

export default SideBar