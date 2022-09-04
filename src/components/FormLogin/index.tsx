import { Card, Form, Button } from "react-bootstrap";
import "./formlogin.scss";
export default function FormLogin() {
  return (
    <div>
      <div
        className="formCadastro container h-100 pt-5 d-flex align-itens-center 
        justify-content-center  "
      >
        <Card className="cardFormLogin ">
          <Form className="formulario text-center">
            <img src="/assets/img/logo-colorido.png" alt="" />
            <h3> LOGIN</h3>

            <Form.Group className=" boxform p-3" controlId="formBasicEmail">
              <Form.Control
                className="inputTexto"
                type="email"
                placeholder="email"
              />
            </Form.Group>

            <Form.Group className=" boxform p-3" controlId="formBasicPassword">
              <Form.Control
                className="inputTexto"
                type="password"
                placeholder="senha"
              />
            </Form.Group>
            <Button className="button" type="submit">
              entrar
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}
