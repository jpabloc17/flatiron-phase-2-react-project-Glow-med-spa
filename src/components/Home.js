import ReviewsList from "./ReviewsList";
import "../stylesheets/App.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Reluxe Med Spa</h1>
      <ReviewsList />
    </div>
  );
}

export default Home;
