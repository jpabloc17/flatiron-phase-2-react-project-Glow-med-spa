import ReviewsList from "./ReviewsList";
import logo from "../media/Welcometo.png";
import "../stylesheets/App.css";

function Home() {
  return (
    <div className="home">
      <div className="welcome-message-container">
        <img src={logo} alt="welcome message" className="welcome-message" />
      </div>
      <ReviewsList />
    </div>
  );
}

export default Home;
