import "./NavBarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaTimes,FaBars} from "react-icons/fa";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//<FontAwesomeIcon size="lg" style={{color:"#fff"}} icon={faChessKing} />




const NavBar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className ="header">
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home </ Link>
            </li>
            <li>
                <Link to="/about">About</ Link>
            </li>
            <li>
                <Link to="/project">Project </ Link>
            </li>
          
            <li>
                <Link to="/contact">Contact</ Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
                { click ? (<FaTimes size="20" style={{color:"#fff"}}/>) :( <FontAwesomeIcon size="2x" style={{color:"#fff"}} icon={faChessKnight} />)}

            </div>
    </div>
  )
}

export default NavBar