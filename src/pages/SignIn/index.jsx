/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import React, { useCallback, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { useAuth } from "../../hooks/AuthContext";
import GetErros from "../../utils/GetErros";

import { Container, Card, Options, Bottom, Background } from "./styles";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

import backgroundImg from "../../assets/background.jpg";

const SignIn = () => {
  const formRef = useRef(null);

  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email().required("Informe um email válido."),
        password: Yup.string()
          .min(6)
          .required("A senha deve ter entre 4 a 60 caracteres"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      await login({
        email: data.email,
        password: data.password,
      });
      window.alert("Bem vindo!");
      history.push("/dashboard");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = GetErros(err);
        formRef.current.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Header />
      <Card>
        <Background src={backgroundImg} alt="Netflix" />

        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Entrar</h1>
          <Input name="email" type="text" placeholder="Email" />
          <Input name="password" type="password" placeholder="Senha" />

          <Button type="submit">Entrar</Button>
          <Options>
            <section>
              <input type="checkbox" name="lembre-se-de-mim" />
              Lembre-se de mim
            </section>
            <section>
              <Link to="/signup">Cadastre-se</Link>
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

export default SignIn;
