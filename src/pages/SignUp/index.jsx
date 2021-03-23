/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import React, { useCallback, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form } from "@unform/web";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import * as Yup from "yup";

import GetErros from "../../utils/GetErros";
import { useAuth } from "../../hooks/AuthContext";

import { Container, Card, Options, Bottom } from "./styles";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp = () => {
  const formRef = useRef(null);
  const { signin } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().required("Informe um email válido."),
          password: Yup.string()
            .min(6)
            .required("Sua senha deve ter entre 4 a 60 caracteres"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        const { email, password } = data;
        await signin(email, password);
        history.push("/");
      } catch (err) {
        const errors = GetErros(err);
        formRef.current.setErrors(errors);
      }
    },
    [signin, history]
  );

  return (
    <Container>
      <Header />
      <Card>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Cadastro</h1>
          <Input name="email" type="text" placeholder="Email" />
          <Input name="password" type="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>
          <Options>
            <section>
              <Link to="/">
                <ExitToAppIcon />
                SignIn
              </Link>
            </section>
          </Options>
        </Form>
      </Card>
      <Bottom>
        <Footer />
      </Bottom>
    </Container>
  );
};

export default SignUp;
