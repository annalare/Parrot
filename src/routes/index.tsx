import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "../view/Cadastro";
import Feed from "../view/Feed";
import Login from "../view/Login";
import Profile from "../view/Profile";
export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/register" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
