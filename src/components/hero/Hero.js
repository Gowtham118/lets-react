import React from 'react';

function Hero(props) {
    return (
        <>
<div className="hero">
    <div className="wrapper">
          <div className="heroText">
            <h1 style={{fontSize:"48px"}} className="htext">We build bespoke
        web applications
        for our clients.</h1>
        <button style={{margin:"30px", fontStyle:"bold", width:"220px"} } className="hiring"> WE ARE HIRING! JOIN US </button>
        </div> 
        <div className="heroimg">
            <img src="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60dcaaab09f25550c9762868_Flat%20color%20Modern%20Isometric%20Illustration%20design%20-%20Development%201.png" alt="heroImg"/>
        </div>
    </div>
</div>
        </>
    );
}

export default Hero;