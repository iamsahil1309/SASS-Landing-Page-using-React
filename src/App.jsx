import { useState } from 'react'
import {partnersLogo} from './data/partners'
import Slider from './components/Slider'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import RoadMap from './components/RoadMap'
import FeatureSection from './components/FeatureSection'
import Testimonial from './components/Testimonial'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
    <div className='w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none'>
      <div className="bg-[url('/grid.svg')]absolute inset-0 opacity-25"></div>
      <img src="/mesh.svg" className='absolute bottom-1 h-[600px] z-10 opacity-15' alt="" />
      <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 Z-20"></div>
    </div>
     <div className='relative z-20'>
     <NavBar/>
     <div className="container mx-auto">
     <HeroSection/>
     <Slider images={partnersLogo}/>
     <RoadMap/>
     <FeatureSection/>
     <Testimonial/>
     <PricingSection/>
     <Footer/>
     </div>
     </div>
     
    </>
  )
}

export default App
