import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
      <div className='flex flex-col items-center mx-56 gap-9' >
        <h2 className='font-extrabold text-[55px] text-center mt-16'><span className='text-[#f56551]'>AI-Powered Travel, Tailored for You: </span> Smart Itineraries, Seamless Adventures</h2>
      <p className='text-xl text-gray-500 text-center'>Plan your perfect trip effortlessly—our AI curates personalized itineraries based on your preferences, budget, and travel style.</p>
      <Link to='/create_trip'>
        <Button>Get Started,It's Free</Button>
      </Link>
      </div>
  )
}

export default Hero