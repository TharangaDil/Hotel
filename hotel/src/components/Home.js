import React from "react";
import { useNavigate } from 'react-router-dom';
import './CSS/main.css';

export default function Home(){
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate('/Home');
};

const gotoGallery = () => {
  navigate('/Gallery');
};


    return(
        <>
        <header className="header1">
      <div className="name">Samanala Hotel</div>
      <div className="address">No 124/1, Puttalam Road, Nochchiyagama, Sri Lanka</div>
      <marquee>Samanala Hotel - Nochchiyagama</marquee>

      <ul className="naviga" >
        <li className="nav"><a href='/Home' onClick={gotoHome}>Home</a></li>
        <li className="nav"><a href='/Gallery' onClick={gotoGallery}>Gallery</a></li>
        <li className="nav"><a href="About">About Us</a></li>
        <li className="nav"><a href="Login">Login</a></li>
        <li className="nav"><a href="Contact">Contact Us</a></li>
        <li className="nav"><a href="Reservation">Reservation</a></li>
      </ul>

      <br /><br /><br />
      <center>
        <input type="text" size="40" style={{ backgroundColor: 'gray', height: '20px' }} />&nbsp;&nbsp;
        <input type="submit" value="search" style={{ backgroundColor: 'blue' }} />
      </center>
    </header>

    <footer>
      <br />

      <div style={{ fontSize: '20px', fontFamily: 'serif' }} className="city">Cities Nearby<br />
      
      <ul className="cities">
        <li>Pahala Keditokkuwa (3.5km)</li>
        <li>Pahala Maragahawewa (3.5km)</li>
        <li>Wilpattu (3.8km)</li>
        <li>Habawewa (4.5km)</li>
        <li>Kukulkatuwa (4.9km)</li>
        <li>Anuradhapura (16km)</li>
        <li>Puttalam District (17.2km)</li>
        <li>Wilpattu National Park (17.2km)</li>
      </ul>
      </div>

      <br />

      <div className="follow">Follow us:</div>
      <ul className="social">
        <li className="s1">Facebook -&nbsp;&nbsp;<a href="Samanala Hotel facebook.lk" className="f">Samanala Hotel</a></li>
        <li className="s1">E-mail - &nbsp;&nbsp;<a href="samanalahnochchiyagama@gmail" className="f">samanalahnochchiyagama@gmail</a></li>
        <li className="s1">Telephone - &nbsp;&nbsp;0259856758</li>
      </ul>

     

      <div className="helpp">
        <a href="help" >Help Center</a>
        
        <a href="detail" className="more" >More Details</a>
      </div>
    </footer>

        </>
    )
}