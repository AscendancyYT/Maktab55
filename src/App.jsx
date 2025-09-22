import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Pride from "./Components/Pride/Pride";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Pride />
    </div>
  );
}

export default App;
