import "./bestwork.css";
import Flags from "../flags/Flags";
import Appstore from "../appstores/Appstore";

function Bestwork(props) {
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "70px",
          width: "100%",
        }}
      >
        Our Best Work
      </h1>
      <div className="bestwork">
        <div className="wrapper">
          <img
            src="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e17772cfd88480374574bf_Group%203666.png"
            alt="mobile"
          />
          <div className="vertical-container">
            <h1 style={{ fonStyle: "44px" }}>INAAM - Loyalty App</h1>
            <div className="bestworktext">
              <p>
                Launched in April 2021, INAAM App rewards consumers who
                frequently make online and retail purchases with incentives such
                as offers, deals, discounts and vouchers.
                <br /> <br />
                Nesto has over 90+ hypermarkets with over 2 million customers
                transacting groceries on a daily basis. It operates in:
              </p>
            </div>
            <div className="flag-section">
              <Flags imageUrl="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1905a0680f646c0f2ed48_Frame%2019517-1.png" />
              <Flags imageUrl="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1905a71e811c74eae227d_Frame%2019517.png" />
              <Flags imageUrl="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1905ad03c5876dbed3ae2_Frame%2019517-2.png" />
              <Flags imageUrl="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1905c7fd8171775cf2949_Frame%2019517-4.png" />
              <Flags imageUrl="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1905b28dd168ea7c07bca_Frame%2019517-3.png" />
              <Flags imageUrl="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e1905e43b07dae53375767_Frame%2019517-5.png" />
            </div>
            <div className="bestworkfoot">
              <p>
                The Nesto footprint is soon expected to expland into other
                markets in Asia.
              </p>
            </div>
            <Appstore />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bestwork;
