import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import RadChart from '../components/Chart/RadChart'
import ArChart from '../components/Chart/ArChart'
import './parent.css'
import { Link } from 'react-router-dom'
import TestCard from '../components/TestCard'
const Parent = () => {
  return (
    <div>
      <NavBar text="Parent DashBoard" />
      <section >
        <div className='dashboard-split-left'>
          <TestCard testName="Autism" testLink="https://5k7z4ihqges.typeform.com/to/nFckxsoy"/>
          <TestCard testName="Dyspraxia" testLink="https://5k7z4ihqges.typeform.com/to/xqsAUm7U/" />
        </div>
        <div className='dashboard-split-right'>
          <a href="/vc-agora">Schedule a Call</a>
        </div>
      </section>
      <hr />
      <h3>Stats</h3>
      <div className="graph-container">
        
        <RadChart />
        <ArChart />
      </div>
      <Footer />
    </div>
  )
}

export default Parent