import { Form, Button, Container, Row, Col, Stack,} from "react-bootstrap";
import "./comentsfeed.scss";

export default function ComentsFeed() {
  return (
    <div className="feedcoments container">
         <Container>
         <ul className="list-group">
          <li className="list-group-item"> 
          <Row className="row">
            <Col sm={2}>
          <img
            src="/assets/img/profile1.png"
            className="img-user-coment"
            />
            </Col>
            <Col sm={10}>
            <p className="morador">Viniciu - Apê 42</p>
            <p className="data">07/09/2022 17:50</p>
            <p className="comentario">Poxa galera, vamos respeitar o horário de silêncio! 
Tinha alguém usando furadeira 2 HORAS DA MANHÃ!!! ó_ó</p>
        </Col>
        </Row>
        
       </li>
          <li className="list-group-item">
          <Row className="row">
          <Col sm={2}>
          <img
            src="/assets/img/profile1.png"
            className="img-user-coment"
            />
            </Col>
            <Col sm={10}>
            <p className="morador">Viniciu - Apê 42</p>
            <p className="data">07/09/2022 17:50</p>
            <p className="comentario">Poxa galera, vamos respeitar o horário de silêncio! 
Tinha alguém usando furadeira 2 HORAS DA MANHÃ!!! ó_ó</p>
        </Col>
        </Row>

          </li>
          <li className="list-group-item">
          <Row className="row">
          <Col sm={2}>
          <img
            src="/assets/img/profile1.png"
            className="img-user-coment"
            />
            </Col>
            <Col sm={10}>
            <p className="morador">Viniciu - Apê 42</p>
            <p className="data">07/09/2022 17:50</p>
            <p className="comentario">Poxa galera, vamos respeitar o horário de silêncio! 
Tinha alguém usando furadeira 2 HORAS DA MANHÃ!!! ó_ó</p>
        </Col>
</Row>


        </li>
          <li className="list-group-item">
          <Row className="row">
          <Col sm={2}>
          <img
            src="/assets/img/profile1.png"
            className="img-user-coment"
            />
            </Col>
            <Col sm={10}>
            <p className="morador">Viniciu - Apê 42</p>
            <p className="data">07/09/2022 17:50</p>
            <p className="comentario">Poxa galera, vamos respeitar o horário de silêncio! 
Tinha alguém usando furadeira 2 HORAS DA MANHÃ!!! ó_ó</p>
        </Col>
        </Row>
        </li>
          <li className="list-group-item">
          <Row className="row">
          <Col sm={2}>
          <img
            src="/assets/img/profile1.png"
            className="img-user-coment"
            />
            </Col>
            <Col sm={10}>
            <p className="morador">Viniciu - Apê 42</p>
            <p className="data">07/09/2022 17:50</p>
            <p className="comentario">Poxa galera, vamos respeitar o horário de silêncio! 
Tinha alguém usando furadeira 2 HORAS DA MANHÃ!!! ó_ó</p>
        </Col>
       </Row>
        </li>
         </ul>
         </Container>
        </div>
  );
}


