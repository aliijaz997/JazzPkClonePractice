import React from "react";
import './Slider.css'

const Quickpackages=()=>{
return(
    <>
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 1"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item">
      <a href="/" className="sa">JAZZ X-META
      <p className="ps">Join Hands to create awareness about on making Cyberspace better for women.</p>
      </a>
      <button className="cbtn">Details</button>
      <img src="../Images/ConHead.png" className="Simgs" alt="..."/>
    </div>
    
    <div className="carousel-item">
      <a href="/" className="sa">Recharge Now
      <p className="ps">Running out of balance?</p>
      </a>
      <button className="cbtn">Recaharge</button>
      <img src="../Images/Postpaid.png" className="Simgs" alt="..."/>
    </div>
    
    <div className="carousel-item">
      <a href="/" className="sa">Choose Your Number
      <p className="ps">Book A sim</p>
      </a>
      <button className="cbtn">Book</button>
      <img src="../Images/Prepaid.png" className="Simgs" alt="..."/>
    </div>

    <div className="carousel-item">
    <a href="/" className="sa">Monthly Max Package
      <p className="ps">Subscribe Now?</p>
      </a>
      <button className="cbtn">Subscribe</button>
      <img src="../Images/Sargodha.png" className="Simgs" alt="..."/>
    </div>
    <div className="carousel-item">
      
    <a href="/" className="sa">Book an Appointment
      <p className="ps">Book appointment for jazz experience?</p>
      </a>
      <button className="cbtn">Book</button>
      <img src="../Images/banner-mobile.png" className="Simgs" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
)
}
export default Quickpackages;