import React from 'react'
import Banner from '../components/Banner/Banner'
import ImageSlider from '../components/Slider/ImageSlider'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'


export default function Home() {
  return (
    <div>
        <Banner/>  
          <Navbar/>   
        <ImageSlider/>
        <Footer/>
        </div>
  )
}
