import Button from "react-bootstrap/Button";
import { Form, Card } from "react-bootstrap";
import { useState } from "react";
import "./formregister.scss";
const [nome, setNome] = useState<string>("");
const [email, setEmail] = useState<string>("");
const [senha, setSenha] = useState<string>("");
const [confirmarSenha, setConfirmarSenha] = useState<string>("");
const [apartamento, setApartamento] = useState<string>("");
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
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Form.Group>
            <Form.Group className=" boxform p-3" controlId="formBasicEmail">
              <Form.Control
                className="inputTexto"
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className=" boxform p-3" controlId="formBasicPassword">
              <Form.Control
                className="inputTexto"
                type="password"
                placeholder="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="p-3 boxform" controlId="formBasicPassword">
              <Form.Control
                className="inputTexto"
                type="password"
                placeholder="confirmar senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="p-3 boxform" controlId="formBasicEmail">
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="unidade/apartamento"
                value={apartamento}
                onChange={(e) => setApartamento(e.target.value)}
              />
            </Form.Group>
            {/* <Form.Group className="p-3 boxform" controlId="formBasicEmail">
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="link da foto"
              />
            </Form.Group> */}
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
