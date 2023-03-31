import React from "react";
import './Footer.css';

const Footer=()=>{
return(
    <>

        <p className="p0">Looking For More?</p>
        <div className="logo1">
            
            <div className="l1">
                <ul>
                    <p className="p1">KNOW MORE ABOUT JAZZ?</p>
                    <hr/>
                    <a href="/">About Us</a>
                    <a href="/">Our Brand</a>
                    <a href="/">Health & Safety</a>
                    <a href="/">Sustainability Report</a>
                    <a href="/">Investor Relations</a>
                    <a href="/">Media Center</a>
                </ul>
            </div>
            <div className="l2">
                <ul>
                    <p className="p1">WANT TO ORDER A SIM/DEVICE?</p>
                    <hr/>
                    <a href="/">Switch to Jazz</a>
                    <a href="/">Prepaid SIM</a>
                    <a href="/">Postpaid SIM</a>
                    <a href="/">Wifi Devices</a>
                    <a href="/">SIM Purchase T&Cs</a>
                </ul>    
            </div>
        
            <div className="l3">
               <ul>
                <p className="p1">HOW CAN I APPLY FOR A JOB?</p>
                <hr/>
                <a href="/">Apply Now</a>
                <a href="/">Find Your Fit</a>
               </ul>
                
            </div>
            <div className="l4">
                <ul>
                
                <p className="p1">SELF SERVICE OPTIONS</p>
                <hr/>
                <a href="/">Jazz Self Service</a>
                <a href="/">Whatsapp Self Service</a>
                <a href="/">Self Service Dial Codes</a>
                <a href="/">Jazz World</a>
                <a href="/">Book Experience Center Appointment</a>
                </ul>
                
            </div>
            <div className="l5">
                <ul>
                <p className="p1">LOOKING TO WORK WITH US?</p>
                <hr/>
                <a href="/">Become a Jazz Franchisee</a>
                </ul>
                
            </div>
        
        </div>
        <div className="center">
        <a class="map1" href="#"><img src="../Images/map1.png"></img> </a>
        <a class="map2" href="#"><img src="../Images/map2.png"></img> </a>
        <a class="map3" href="#"><img src="../Images/map3.png"></img> </a>
        <a class="map4" href="#"><img src="../Images/map4.png"></img> </a>
        </div>

        
        <hr/>
        <p className="lf">© COPYRIGHT 2023 JAZZ, ALL RIGHTS RESERVED</p>


    </>
)
}
export default Footer;