import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ServicesPage from "./components/ServicesPage";
import Calendar from "./components/Calendar";
import "./stylesheets/App.css";

function App() {
  const tableinformation = [
    {
      date: "2023/10/25",
      client: "Pablo",
      time: "3:00 PM",
      esthetician: "Manuela",
    },
    {
      date: "2023/10/25",
      client: "Alex",
      time: "4:00 PM",
      esthetician: "Manuela",
    },
  ];
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route
          path="/calendar"
          element={<Calendar tableinformation={tableinformation} />}
        ></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
