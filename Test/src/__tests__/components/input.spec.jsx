import React from "react";

import { fireEvent, render, waitFor } from "@testing-library/react";

import Input from "../../components/Input";

jest.mock("@unform/core", () => {
  return {
    useField() {
      return {
        fieldName: "email",
        defaultValue: "",
        error: "",
        registerField: jest.fn(),
      };
    },
  };
});

describe("Input Component", () => {

  //Teste unitário ou de Sistema. O componente Input deve ser renderizado com as propriedades enviadas.
  it("should be able to render an input", () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="Email" />
    );

    expect(getByPlaceholderText("Email")).toBeTruthy(); // Exist?
  });

  //Teste unitário ou sistema. O componente deve trocar a cor da borda ao ser focado.
  it("should render highlight on input focus", async () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="Email" />
    );

    const inputElement = getByPlaceholderText("Email");

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(inputElement).toHaveStyle("border-bottom:2px solid #e87c03;");
    });
  });
});
