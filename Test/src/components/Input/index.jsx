/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from "react";
import { useField } from "@unform/core";

import { Container } from "./styles";

const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <Container isFocused={isFocused}>
      <input
        onFocus={() => setIsFocused(true)}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      <span>{error}</span>
    </Container>
  );
};

export default Input;
