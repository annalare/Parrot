import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import { useState, FormEvent } from "react";
import "./postuser.scss";
import { mensagem } from "../../services/login";
import { setUser } from "../../store/modules/users";

export default function PostUser() {
  const [mensage, setMensage] = useState<string>("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await mensagem({ mensage });
      console.log(response.data);
      alert("Mensagem enviada");
    } catch (error) {
      alert("Ops, deu algo errado");
    }
  };
  return (
    <>
      <Container className=" justify-content-center carduser">
        <Card className="w-75 shadow-sm text-center mt-1 justify-content-end ">
          <Card.Body className="cardbody ">
            <Card.Img
              src="../assets/img/profile1.png"
              alt="perfil"
              className="perfil-img "
            />
            <Form onSubmit={submit}>
              <Form.Control
                className="texto pb-4 m-4 "
                as="textarea"
                placeholder="Deixe sua mensagem ..."
                value={mensage}
                onChange={(e) => setMensage(e.target.value)}
              />
            </Form>
            <Form.Group className="d-flex ">
              <Button className="botao-publicar ">publicar</Button>
            </Form.Group>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
