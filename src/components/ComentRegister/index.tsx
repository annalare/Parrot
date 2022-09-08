import { Form, Button, Container, Row, Col, Stack} from "react-bootstrap";

import "./comentregister.scss"

export default function ComentRegister () {
    return (
    <div className="user-coment container ">
        <Container>
            <Stack gap={2}>
           <Row>
                <Col sm={2}>
            <img
            src="/assets/img/profile1.png"
            className="img-user-coment"
            />
            </Col>
            <Col sm={10}>
                <Form.Control
        className="inputText "
        type="text"
        placeholder=""
        />
        </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
            <Button className="button-publish " type="submit" >
                publicar
            </Button>
            </Col>
            </Row>
            </Stack>
            </Container>
            </div>
    )
}