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
  it("should be able to render an input", () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="Email" />
    );

    expect(getByPlaceholderText("Email")).toBeTruthy(); // Exist?
  });

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
