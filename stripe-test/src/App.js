import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pay from "./Pay";
import Success from "./Success";
import Home from "./Home";

const App = () => {
  return (
    <div className="App-header">
      <Router>
        <Routes>
          <Route path="/pay" element={<Pay />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
