import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./view/Cadastro";
import Login from "./view/Login";
import Profile from "./view/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Feed</h1>} />
        <Route path="/register" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
