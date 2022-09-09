import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
  const id = window.localStorage.getItem("id");

  return (
    <Container className="containerUsuarioProfile">
      <div className="user-container d-flex justify-content-around w-75">
        <div className="d-flex">
          <img
            src="/assets/img/profile1.png"
            width="100"
            height="100"
            className="d-block"
          />
          <div className=" px-3 containerPerfil">
            <h2>{userData?.name}</h2>
            <p>apê {userData?.apartment}</p>
            <p>{userData?.email}</p>
            <>{qtdMessages} publicações</>
          </div>
        </div>
        <div className="">
          {userData?.id == parseInt(id!) && (
            <Link to={"/editar"}>
              <Button className="buttonProfile">editar perfil</Button>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
}
