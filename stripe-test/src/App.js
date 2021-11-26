import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pay from "./Pay";
import Home from "./Home";

const App = () => {
  return (
    <div className="App-header">
      <Router>
        <Routes>
          <Route path="/pay" element={<Pay />} />
          {/* <Routes path="/success">
          <Success />
        </Routes> */}
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
