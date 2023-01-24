import React from 'react'
import CV from '../../assets/TarynKing-Res22.pdf';

const CTA = () => {
  return (
    <div class="cta cta-grid-item">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Contact</a>
    </div>
  )
}

export default CTA