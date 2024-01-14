// import './App.css'
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/aptara" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
