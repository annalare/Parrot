import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
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
          <Card.Body className="cardbody">
            <Form
              onSubmit={submit}
              className="d-flex flex-column align-items-end w-100"
            >
              <div className="d-flex align-items-center w-100">
                <Card.Img
                  src="../assets/img/profile4.png"
                  alt="perfil"
                  className="perfil-img "
                />
                <Form.Control
                  className="texto pb-4 m-4"
                  as="textarea"
                  placeholder="Deixe sua mensagem ..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <Form.Group className="">
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
