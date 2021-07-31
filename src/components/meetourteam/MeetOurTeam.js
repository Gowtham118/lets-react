import "./MeetOurteam.css";
import Card from "../card/Card.js";
import React from "react";

function MeetOurTeam(props) {
  return (
    <>
      <div className="MeetOurTeam">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "70px",
            width: "100%",
            color: "#FFFFFF",
          }}
        >
          Meet Our Team
        </h1>
        <div className="mottext">
          <p>
            We Have Over 30+ Experienced Specialists In The Field Of Design And
            Software Development.
          </p>
        </div>
        <div className="cardContainer">
          <Card
            imageUrl="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1b31d39a1de798ad87b2f_Frame%2019508-1.jpg"
            name="Vedansh W."
            designation="Product Designer"
          />
          <Card
            imageUrl="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1b2e67fd81709b5cfa788_Frame%2019508-3.jpg"
            name="Nisarg Tike"
            designation="Tech Lead"
          />
          <Card
            imageUrl="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1b31ed1a8bd27670412f4_Frame%2019508-4.jpg"
            name="Sparsh Goil"
            designation="Sr. Backend Engineer"
          />
          <Card
            imageUrl="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1b31d04d215290c2c22a4_Frame%2019508-6.jpg"
            name="Abhishek Kumar"
            designation="Project Manager"
          />
          <Card
            imageUrl="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60f2a604e32652d2acf88eee_Frame%2019508.jpg"
            name="Parth Sarkhelia"
            designation="Sr. Data Scientist"
          />
          <Card
            imageUrl="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1b31edf8a0c74744049a6_Frame%2019508-2.jpg"
            name="Raj Shah"
            designation="Technical Director"
          />
          <Card
            imageUrl="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1b31c30a90d0b41122579_Frame%2019508-5.jpg"
            name="Jay Dave"
            designation="Backend Engineer"
          />
        </div>
      </div>
    </>
  );
}

export default MeetOurTeam;
