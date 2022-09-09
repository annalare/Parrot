import { Button, Container } from "react-bootstrap";
import "./usuario.scss";

interface UserData {
  id: number;
  name: string;
  email: string;
  apartment: number;
}

interface Props {
  userData: UserData;
  qtdMessages: number;
}

export default function Usuario({ userData, qtdMessages }: Props) {
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
          <h2>{userData?.name}</h2>
          <p>apê {userData?.apartment}</p>
          <p>{userData?.email}</p>
          <>{qtdMessages} publicações</>
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
