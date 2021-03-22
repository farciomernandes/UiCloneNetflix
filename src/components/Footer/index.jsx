import React from "react";

import { Container } from "./styles";

const Footer = () => (
  <Container>
    Desenvolvido por{" "}
    <a
      style={{
        color: "red",
        fontWeight: "bold",
      }}
      href="https://www.linkedin.com/in/marcio-fernandes-5252061a9/"
    >
      Marcio Fernandes
    </a>{" "}
    Direitos de imagem para Netlifx <br />
    Dados pegos da API do Themoviedb.org
  </Container>
);

export default Footer;
