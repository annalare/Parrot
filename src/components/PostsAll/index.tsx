import { Card, Container } from "react-bootstrap";
import "./postsall.scss";
export default function PostsAll() {
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Card id="card" className="d-flex w-75 shadow-sm text-center">
          <Card.Body className="justify-content-around d-flex">
            <Card.Img
              src="../assets/img/profile2.png"
              alt="perfil"
              className="perfil-img pt-2"
            />
            <Card.Text className="details d-flex flex-column">
              <div className="userStatus d-flex px-3 flex-start">
                <h4>Paulo</h4>
                <p>apê {222}</p>
                <p>data</p>
              </div>
              <span>
                Poxa galera, vamos respeitar o horário de silêncio! Tinha alguém
                usando furadeira 2 HORAS DA MANHÃ!!! ó_ó
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
