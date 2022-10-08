import React from "react"
import About from "./About"
import Interests from "./Interests"
export default function info(){
    return(
        <div className="info--detail">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQGXTUN7geoLpA/profile-displayphoto-shrink_800_800/0/1641731383990?e=1670457600&v=beta&t=jiUmig6WDNq_EelDPcdmUxK4ySTWbxki9qoluXbmeFY" height="317"  className="profile---img"/>
           <div className="info--detail--">
            <h3 className="name--i">Shadab Ahmed</h3>
            <p className="profession">Frontend Developer</p>
            <div className="section---">
                <span className="email---"><span><img className="icon" src="./Icons/Icon.svg" /></span>Email</span>
                <span className="space"> </span>
                <span className="linkdin---"><span><img src="./Icons/Vector.svg" /></span>Linkdin</span>
                
                
                <About />
                {/* <Interests /> */}
            </div>
           </div>
                
        </div>
    )
}