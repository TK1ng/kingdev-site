import React from 'react'
import CTA from '../cta/CTA';
import Nav from '../nav/Nav';
import SocialLinks from '../links/SocialLinks';
import heroProfile from '../../assets/Hero_profile_transparent.png'
import logo from '../../assets/King-Logo-svg.svg'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="hero_grid-container">
        <div className="hero__overlay"></div>
        <div className="logo logo-grid-item">
          <img src={logo} alt="Crown logo"/>
        </div>
        <div className="hero__profile profile-grid-item">
          <div className="top-gradient"></div>
          <div className="bottom-gradient"></div>
          <img src={heroProfile} alt="Profile of Taryn King" />
        </div>
        <div className="headline headline-grid-item">
          <h1>I am <span className="gradient">King</span><span className="title">Developer</span></h1>
        </div>
        <CTA />
        <Nav />
        <SocialLinks />
      </div>
    </header>
  )
}

export default Header