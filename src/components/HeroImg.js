import "./HeroImgStyles.css";
import IntroImg from"../assets/myImg.jpeg";

import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className ="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className = "content">
            <p>Hi, I'm Sasa</p>
            <h1>Software Developer</h1>
            <div>
                
                <Link className="btn" to="/project"> Projects </Link>
                <Link className="btn btn-light " to="/contact"> Contact </Link>
            </div>

        </div>

    </div>
  )
}

export default HeroImg;
