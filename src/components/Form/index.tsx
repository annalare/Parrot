import Button from "react-bootstrap/Button";
import { Form, Card } from "react-bootstrap";

import "./form.scss";

const Formulario = () => {
  return (
    <div>
      <div
        className="formCadastrocontainer h-100 pt-5 d-flex align-itens-center 
        justify-content-center  "
      >
        <Card className="cardForm ">
          <Form className="formulario text-center">
            <img src="/assets/img/logo-colorido.png" alt="" />
            <h3> CADASTRO</h3>
            <Form.Group className=" d-flex mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="senha" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="confirmar senha" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="unidade/apartamento" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="link da foto" />
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
