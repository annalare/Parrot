import Button from "react-bootstrap/Button";
import { Form, Card } from "react-bootstrap";

import "./formregister.scss";

const Formulario = () => {
  return (
    <div>
      <div
        className="formCadastro container h-100 pt-5 d-flex align-itens-center 
        justify-content-center  "
      >
        <Card className="cardForm ">
          <Form className="formulario text-center">
            <img src="/assets/img/logo-colorido.png" alt="" />
            <h3> CADASTRO</h3>
            <Form.Group
              className=" boxform d-flex  p-3 "
              controlId="formBasicEmail"
            >
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="nome"
              />
            </Form.Group>
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
            <Form.Group className="p-3 boxform" controlId="formBasicPassword">
              <Form.Control
                className="inputTexto"
                type="password"
                placeholder="confirmar senha"
              />
            </Form.Group>

            <Form.Group className="p-3 boxform" controlId="formBasicEmail">
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="unidade/apartamento"
              />
            </Form.Group>
            <Form.Group className="p-3 boxform" controlId="formBasicEmail">
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="link da foto"
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
};

export default Formulario;
