import "./Card.css";

import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="photo">
        <img
          style={{
            height: "240px",
            width: "400px",
            borderRadius: "15px 15px 0px 0px",
          }}
          src={props.imageUrl}
          alt="review"
        />
      </div>
      <div className="description">
        <span>
          <h4>{props.name}</h4>
        </span>
        <span>{props.designation}</span>
        <img
          style={{ cursor: "pointer" }}
          src="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60dcccc00cd3d221442a5666_Frame%203651.svg"
          alt="linkedin-logo"
        />
      </div>
    </div>
  );
}

export default Card;
