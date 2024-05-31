import React from 'react';
import './CSS/main.css';


export default function About() {
  return (
    <>
      <header>
        <div className="name">Samanala Hotel</div>
        <div className="address">No 124/1,Puttalam Road,Nochchiyagama,Sri Lanka</div>
        <div className="marquee">
          <marquee>Samanala Hotel-Nochchiyagama</marquee>
        </div>
        
        <ul>
          <li><a href="mainpage.html" className="active">Home</a></li>
          <li><a href="Gallery.html">Gallery</a></li>
          <li><a href="About.html">About Us</a></li>
          <li><a href="login.html">Login</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="reservation.html">Reservation</a></li>
        </ul>
        <br />
        <div className="description">
          <p className='data1'>This hotel is 0.5mi(0.8km) from Nochchiyagama Grand Mosque and 0.7mi(1.1km) from Nochchiyagama District Hospital.</p>
          <i className="fas fa-clock">&nbsp;24hr font desk</i><br /><br />
        <i className="fas fa-parking">&nbsp;Parking</i><br /><br />
        <i className="fas fa-swimming-pool">&nbsp;Pool</i><br /><br />
        <i className="fas fa-bed">&nbsp;Rooms</i>
        <br /><br />
          
          <div style={{ fontSize: '18px' }} className='data2'>
            Where is Samanala Hotel located?<br />
            Samanala Hotel located at N0 124/1 Puttalam Road,1.5 miles from the center of Nochchiyagama.<br />
            When is check-in time and check-out time at Samanala Hotel?<br />
            Check-in time is 12:00PM and check-out time is 11:00AM at Samanala Hotel.<br />
            Does Samanala Hotel offer free Wi-Fi?<br />
            No, Samanala Hotel does not offer free Wi-Fi.<br />
            Does Samanala Hotel offer free parking?<br />
            No, Samanala Hotel does not offer free parking.<br />
            How far is Samanala Hotel from airport?<br />
            Samanala Hotel is 41.6 miles from Sigiriya. Samanala Hotel is 69.7 miles from Trincomalee China Bay.<br />
            Does Samanala Hotel have a pool?<br />
            Yes, Samanala Hotel has a pool onsite.
          </div>
        </div>
      </header>
      <br />
      <footer>
        <br />
        <div style={{ fontSize: '20px', fontFamily: 'serif' }}>Cities Nearby</div>
        <br />
        <ul>
          <li>Pahala Keditokkuwa (3.5km)</li><br />
          <li>Pahala Maragahawewa (3.5km)</li><br />
          <li>Wilpattu (3.8km)</li><br />
          <li>Habawewa (4.5km)</li><br />
          <li>Kukulkatuwa (4.9km)</li><br />
          <li>Anuradhapura (16km)</li><br />
          <li>Puttalam District (17.2km)</li><br />
          <li>Wilpattu National Park (17.2km)</li>
        </ul>
        <br /><br />
        <div>Follow us:</div>
        <ul>
          <li>Facebook - <a href="Samanala Hotel facebook.lk" className="f">Samanala Hotel</a></li>
          <li>E-mail - <a href="mailto:samanalahnochchiyagama@gmail" className="f">samanalahnochchiyagama@gmail</a></li>
          <li>Telephone - 0259856758</li>
        </ul>
        <br /><br />
        <div>
          <a href="help" className="o">Help Center</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="detail">More Details</a>
        </div>
      </footer>
    </>
  );
}


