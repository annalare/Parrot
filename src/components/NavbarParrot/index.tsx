import { Navbar, Container, Nav } from "react-bootstrap";

import "./navbar.scss";
export default function NavbarParrot() {
  return (
    <div>
      <Navbar bg="white">
        <Container fluid className="containerNavbar">
          <Navbar.Brand href="#home">
            <img
              src="../assets/img/logohorizontalcolorido.png"
              width="245"
              height="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="helloUser">
              Olá, Usuário | <a href="#login">sair</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
