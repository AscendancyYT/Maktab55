import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
