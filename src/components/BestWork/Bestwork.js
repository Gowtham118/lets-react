import './best_work.css';
import React from 'react';

function Bestwork(props) {
    return (
        <div className="bestwork">
            <h1>Our Best Work</h1>
            <div className="wrapper">
                <img src="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e17772cfd88480374574bf_Group%203666.png" alt="mobile" />
              <div className="bestworkhead">
                  <h1>INAAM - <br/> Loyalty App</h1>
                  </div> 
               <div className="bestworktext">
                   <p>Launched in April 2021, INAAM App rewards consumers who frequently make online and retail purchases with incentives such as offers, deals, discounts and vouchers.

<br/>Nesto has over 90+ hypermarkets with over 2 million customers transacting groceries on a daily basis. It operates in:</p>
               </div>
               <div className="flag-section">
                   <Flag(props)/>
                   <Flag(props)/>
                   <Flag(props)/>
                   <Flag(props)/>
                   <Flag(props)/>
                   <Flag(props)/>
               </div>
            </div>
        </div>
    );
}

export default Bestwork;