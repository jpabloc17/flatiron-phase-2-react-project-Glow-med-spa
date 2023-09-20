import Header from "./components/Header";
import Service from "./components/Service";
import "./stylesheets/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Service
        url="https://handandstone.ca/wp-content/uploads/2016/03/swedish.jpg"
        name="Swedish Massage"
        price="100"
        details="Swedish Massage is the most common and best known type of massage. It involves long, fluid strokes of muscles and tissues with pressure that varies from light to medium to firm. This type of massage is considered to be one of the most relaxing styles. Your Registered Massage Therapist will adjust the pressure according to your sensitivity and preference."
      />
    </div>
  );
}

export default App;
