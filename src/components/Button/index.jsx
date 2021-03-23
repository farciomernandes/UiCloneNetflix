/* eslint-disable react/jsx-props-no-spreading */

import React from "react";

import { Container } from "./styles";

const Button = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
