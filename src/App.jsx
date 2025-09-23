import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
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
      <Contact /> 
    </div>
  );
}

export default App;
