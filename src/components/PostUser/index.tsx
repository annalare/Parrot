import { Button, Card, Container, Form } from "react-bootstrap";
import { useState, FormEvent } from "react";
import "./postuser.scss";
import { mensagem } from "../../services/posts";

interface Props {
  setMessages: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function PostUser({ setMessages }: Props) {
  const [content, setContent] = useState<string>("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const id = window.localStorage.getItem("id");
    const token = window.localStorage.getItem("token");
    try {
      const response = await mensagem({ content, id, token });
      setMessages((prev) => [response.data, ...prev]);

      setContent("");
      alert("Mensagem enviada");
    } catch (error) {
      alert("Ops, deu algo errado");
    }
  };

  return (
    <>
      <Container className=" justify-content-center carduser">
        <Card className="w-75 shadow-sm text-center mt-1  ">
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
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <Form.Group className="d-flex ">
                <Button className="botao-publicar" type="submit">
                  publicar
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
