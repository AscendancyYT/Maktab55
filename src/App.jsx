import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
