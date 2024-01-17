import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/nav";
import { Route, Routes } from "react-router-dom";
import About from "./Components/about";
import Services from "./Components/Services";
import Landing from "./Components/Landing";
import Contact from "./Components/contact";
import Footer from "./Components/footer"
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
