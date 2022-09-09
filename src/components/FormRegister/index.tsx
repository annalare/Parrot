import Button from "react-bootstrap/Button";
import { Form, Card } from "react-bootstrap";
import { FormEvent, useEffect, useState } from "react";
import "./formregister.scss";
import { cadastro } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
const Formulario = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmarPassword, setConfirmarPassword] = useState<string>("");
  const [apartment, setApartment] = useState<string>("");
  const [wrongPass, setWrongPass] = useState<string>("");

  const navigate = useNavigate();

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await cadastro({
        name,
        email,
        password,
        apartment: parseInt(apartment),
      });

      alert("Usuário cadastrado com sucesso");

      navigate("/login");
    } catch (error) {
      alert("Opa! Deu algo errado!");
    }
  };

  useEffect(() => {
    if (password !== confirmarPassword) {
      setWrongPass("wrong-password");
    } else {
      setWrongPass("");
    }
  }, [confirmarPassword]);

  return (
    <div>
      <div
        className="formCadastro container h-100 pt-5 d-flex align-itens-center 
        justify-content-center  "
      >
        <Card className="cardForm ">
          <Form className="formulario text-center" onSubmit={submit}>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="boxform p-3" controlId="formBasicEmail">
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="p-3 boxform" controlId="formBasicPassword">
              <Form.Control
                className={`inputTexto ${wrongPass}`}
                type="password"
                placeholder="confirmar senha"
                value={confirmarPassword}
                onChange={(e) => setConfirmarPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="p-3 boxform" controlId="formBasicEmail">
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="unidade/apartamento"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
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
