import "./footer.css";
import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "70px",
          width: "100%",
          color: "#FFFFFF",
        }}
      >
        Join our team
      </h1>
      <div className="footertext">
        <p>Help us on our quest to make good software even better</p>
      </div>
      <button> Apply Now </button>
      <div className="footerend">
        <img
          src="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1fa9085c6ada76c321d44_Frame%202179.svg"
          alt="logo"
        />
        <div className="socialmedia">
          <img
            src="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60dcccc00cd3d221442a5666_Frame%203651.svg"
            alt="logo"
          />
          <img
            src="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1fd4785c6ad5fea3227a9_Twitter.svg"
            alt="logo"
          />
          <img
            src="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1fd4585c6ad8fd8322797_Facebook.svg"
            alt="logo"
          />
          <img
            src="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1fd450680f604d8f4debf_Angellist.svg"
            alt="logo"
          />
          <img
            src="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1fd45d03c58a9ffef10c2_Behance.svg"
            alt="logo"
          />
          <img
            src="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1fd45402f36e53158fa12_Dribbble.svg"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
