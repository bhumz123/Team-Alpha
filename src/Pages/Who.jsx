import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import './who.css'
const Who = () => {
  return (
    <div>
        <NavBar text="PsyCare" />
        <section>
            <Link to='/parent' className='links'>
            <div class="starting-cards"><img src="//unsplash.it/500/500" alt="" />
            <h2>Parent</h2>
            </div>
            </Link>
            <Link to='/teacher' className='links'>
                <div class="starting-cards"><img src="//unsplash.it/600/600" alt="" />
                <h2>Teacher</h2>
                </div>
            </Link>
        </section>
        <Footer />
    </div>
  )
}

export default Who