import "./App.css";

function Header() {
  return <h1>P&M Spa</h1>;
}

function NavBar() {
  return (
    <nav>
      <ul>
        <li>Services</li>
        <li>Calender</li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
    </div>
  );
}

export default App;
