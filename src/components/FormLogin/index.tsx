import { FormEvent, useState } from "react";
import { Card, Form, Button, FormGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./formlogin.scss";
import { login } from "../../services/userServices";
import { useDispatch } from "react-redux";
import { getUser, setUser } from "../../store/modules/users";
import { Dispatch } from "@reduxjs/toolkit";

export default function FormLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await login({ email, password });

      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("id", response.data.id);
      dispatch(getUser());

      navigate("/");
    } catch (error) {
      alert("Opa! Deu algo errado!");
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
