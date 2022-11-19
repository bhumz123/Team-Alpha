import React from 'react'
import ArChart from '../components/Chart/ArChart'
import LChart from '../components/Chart/LChart'
import PiChart from '../components/Chart/PiChart'
import RadChart from '../components/Chart/RadChart'
import Example from '../components/Chart/TestChart'

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import './teacher.css'


const Teacher = () => {
  return (
    <div>
      <NavBar text="Teacher DashBoard" />
      <SideBar />
      <section className='small-section'>
        <div className='big-table'>
          {/* <RadChart /> */}
          <Example />
          <RadChart />
        </div>
      </section>
      <section className='small-section'>
        <div className="left-chart"><LChart /></div>
        
        <div className="right-chart">
          <PiChart />
        </div>
        </section>
      <section className='small-section'><div className="AreaChart">
        <ArChart />
      </div></section>

      <Footer style={{marginLeft:"20vw",width:"80vw"}}/>
    </div>
  )
}

export default Teacher