import Header from "./components/Header";
import Home from "./components/Home";
import ServicesPage from "./components/ServicesPage";
import "./stylesheets/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ServicesPage />
    </div>
  );
}

export default App;
