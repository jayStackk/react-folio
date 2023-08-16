
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
// import "./App.css";
// import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/skillset/ScrollTop";
import Home from "./pages/HomePage";
import NavBar from "./components/navbar/NavBar";
import PreLoader from "./components/skillset/Preloader";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import Skillset from "./pages/Skillset";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";



// import Home from './pages/Home'
// import Skill from './pages/Skillset'
// import Project from './pages/Projects'
// import Resume from './pages/Resume'
// import Contact from './pages/Contact'

// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import Preloader from "./components/PreLoader"
// import ScrollToTop from "./components/ScrollToTop"

// import "./App.css";
// import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <PreLoader load={load}/>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skillset />} />
          
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          
          {/* <Route path="/skill" element={< />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/skill" element={<Skillset />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}

          {/* <Route path="/techy" element={<Stacknew />} /> */}
          {/* <Route path="/skillset" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
        <Footer />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;