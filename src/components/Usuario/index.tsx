import { Button, Container } from "react-bootstrap";
import "./usuario.scss";
export default function Usuario() {
  return (
    <Container
      fluid
      className="containerUsuarioProfile
       h-100 w-75 d-flex align-itens-center 
    justify-content-center"
    >
      <div className="user-container">
        <img
          src="/assets/img/profile1.png"
          width="100"
          height="100"
          className="d-block"
        />
        <div className="px-4 mx-4 containerPerfil">
          <h2>Nome Sobrenome</h2>
          <p>apê 222</p>
          <p>user@email.com</p>
          <>0 publicações</>
        </div>
        <div className="px-4">
          <Button className="buttonProfile" type="submit">
            editar perfil
          </Button>
        </div>
      </div>
    </Container>
  );
}
