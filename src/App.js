import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import ServicesPage from "./components/ServicesPage";
import Calendar from "./components/Calendar";
import "./stylesheets/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
