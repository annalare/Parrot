import { FormEvent, useState } from "react";
import { Card, Form, Button, FormControl, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./formlogin.scss";

export default function FormLogin() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await login({ email, senha });
    } catch (error) {
      alert("Deu algo errado");
    }
  };
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

            <Form.Group
              className=" boxformlogin p-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                className="inputTexto"
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className=" boxformlogin p-3"
              controlId="formBasicPassword"
            >
              <Form.Control
                className="inputTexto"
                type="password"
                placeholder="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Form.Group>
            <Button className="button" type="submit">
              entrar
            </Button>
            <FormGroup className="cadastrarLink">
              <Link className="linkTo" to={"/register"}>
                Cadastre-se
              </Link>
            </FormGroup>
          </Form>
        </Card>
      </div>
    </div>
  );
}
