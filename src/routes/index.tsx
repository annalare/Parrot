import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { RootStore } from "../store";
import Cadastro from "../view/Cadastro";
import Feed from "../view/Feed";
import Login from "../view/Login";
import Profile from "../view/Profile";
export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile/:id"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

function PrivateRoute({ children }: any) {
  const user = useSelector((store: RootStore) => store.userReduce);

  if (!user.isLogged && !window.localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return children;
}
