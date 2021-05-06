import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SignUp from "../../pages/SignUp";

const mockedHistoryPush = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }) => children,
  };
});

jest.mock("../../hooks/AuthContext", () => {
  return {
    useAuth: () => ({
      signin: jest.fn(),
    }),
  };
});

jest.mock("../../components/Header", () => "Header");

describe("SignIn Page", () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it("should be able create account with credentials", async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const emailField = getByPlaceholderText("Email");
    const passwordField = getByPlaceholderText("Senha");

    fireEvent.change(emailField, { target: { value: "example@email.com" } });
    fireEvent.change(passwordField, { target: { value: "123456" } });

    const buttonElement = getByText("Cadastrar");

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith("/");
    });
  });

  it("should not be able create account with invalid credentials", async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const emailField = getByPlaceholderText("Email");
    const passwordField = getByPlaceholderText("Senha");

    fireEvent.change(emailField, { target: { value: "not-valid-email" } });
    fireEvent.change(passwordField, { target: { value: "123" } });

    const buttonElement = getByText("Cadastrar");

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalledWith();
    });
  });
});