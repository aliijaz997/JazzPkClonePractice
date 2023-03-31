import React from "react";
import Data from "./Data";
import './Container.css'

const Card = (props) =>{
    return(
        <>
                <div className="c">
       {Data.map((props) => {
        return(
            <>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Duration: {props.duration}</h5>
                <p className="card-red">Name: <span className="sp">{props.name}</span></p>
                <p className="card-text">Data: <span className="sp">{props.dat}</span></p>
                <p className="card-text">On-Net: <span className="sp">{props.minutes}</span></p>
                <p className="card-text">Off-Net: <span className="sp">{props.ominutes}</span></p>
                <p className="card-text">SMS: <span className="sp">{props.sms}</span></p>
                
              </div>
              <p className="card-text">Balance: <span className="sp">{props.balance}</span></p>
              <div className="card-body">
                <a href="home" className="card-link"><button>Subscribe</button></a>
                </div>
                <img src={props.img} className="card-img" alt="..."/>
                </div>
                
                </>
        )
        }
      )
       }
</div>
        </>
    )
}
export default Card;