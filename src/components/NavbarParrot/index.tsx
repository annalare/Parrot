import { Navbar, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootStore } from "../../store";
import { removeUser } from "../../store/modules/users";

import "./navbar.scss";
export default function NavbarParrot() {
  const user = useSelector((store: RootStore) => store.userReduce);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const exit = () => {
    window.localStorage.clear();
    dispatch(removeUser());
    navigate("/login");
  };
  return (
    <div>
      <Navbar bg="white header">
        <Container fluid className="containerNavbar">
          <Navbar.Brand>
            <Link to={"/"}>
              <img
                src="../assets/img/logohorizontalcolorido.png"
                width="245"
                height="100"
                className="d-inline-block align-top"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="helloUser">
              Olá,{" "}
              <Link to={`/profile/${user.id}`}>
                {user.name?.split(" ")[0] || "Usuário"}
              </Link>
              <button className="buttonExit" onClick={exit}>
                sair
              </button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
