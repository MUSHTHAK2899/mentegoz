import "./App.css";
import About from "./components/About";
import Clints from "./components/Clints";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Imagescroll from "./components/Imagescroll";
import Join from "./components/Join";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Review from "./components/Review";
import Services from "./components/Services";
import Why from "./components/Why";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Why />
      <Clints />
      <Imagescroll />
      <Join />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
