import { FormEvent, useState } from "react";
import { Card, Form, Button, FormControl, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./formlogin.scss";
import { login } from "../../services/login";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/modules/users";

export default function FormLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await login({ email, password });
      console.log(response.data);
      dispatch(
        setUser({
          token: response.data.token,
          id: response.data.id,
        })
      );
      alert("Deu certo");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div
        className="formCadastro container h-100 pt-5 d-flex align-itens-center 
        justify-content-center  "
      >
        <Card className="cardFormLogin ">
          <Form className="formulario text-center" onSubmit={submit}>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
