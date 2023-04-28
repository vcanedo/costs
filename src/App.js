import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";


function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/newproject">New Project</Link>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/newproject" element={<NewProject />} />
      </Routes>
    </Router>
  );
}

export default App;
