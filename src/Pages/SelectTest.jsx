import React from 'react'
import NavBar from '../components/NavBar'
import TestCard from '../components/TestCard'
import './selecttest.css'
import students from '../Data'
const SelectTest = () => {
  return (
    <div><NavBar text="Tests" />
    <div className="tests-container">
        <TestCard testName="ADHD and Autism" />
        <TestCard testName="Dyslexia" />
        <TestCard testName="Dysphoria" />
        <TestCard testName="" />
    </div>

    </div>
  )
}

export default SelectTest
