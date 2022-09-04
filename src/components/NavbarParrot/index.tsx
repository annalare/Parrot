import { Navbar, Container } from "react-bootstrap";
export default function NavbarParrot() {
  return (
    <div>
      <Navbar bg="white">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}
