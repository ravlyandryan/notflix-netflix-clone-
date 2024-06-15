import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_banner2 from '../../assets/hero_banner2.jpg'
import hero_title from '../../assets/hero_title.png'
import hero_title2 from '../../assets/hero_title2.webp'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner2} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title2} alt="" className='caption-img' />
          <p>With the rising tide of steam power and machinery, who can come close to being a Beyonder? Shrouded in the fog of history and darkness, who or what is the lurking evil that murmurs into our ears?</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Notflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top Picks for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
