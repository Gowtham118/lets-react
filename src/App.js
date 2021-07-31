import Navbar from "./components/nav/Navbar.js";
import Hero from "./components/hero/Hero.js";
import Bestwork from "./components/BestWork/Bestwork.js";
import MeetOurTeam from "./components/meetourteam/MeetOurTeam.js";
import Footer from "./components/footer/Footer.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Bestwork />
      <MeetOurTeam />
      <img
        src="https://uploads-ssl.webflow.com/60dc474f42c389312418e410/60e2063797507e9d702548a0_Group%203665.png"
        alt="dummy"
      />
      <Footer />
    </div>
  );
}

export default App;
