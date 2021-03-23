import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SignIn from "../../pages/SignIn";

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
      login: jest.fn(),
    }),
  };
});

jest.mock("../../components/Header", () => "Header");

describe("SignIn Page", () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });
  it("should be able ti sign in", async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText("Email");
    const passwordField = getByPlaceholderText("Senha");

    fireEvent.change(emailField, { target: { value: "marcio@gmail.com" } });
    fireEvent.change(passwordField, { target: { value: "123456" } });

    const buttonElement = getByText("Entrar");

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith("/dashboard");
    });
  });

  it("should not be able  sign in with invalid credentials", async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText("Email");
    const passwordField = getByPlaceholderText("Senha");

    fireEvent.change(emailField, { target: { value: "not-valid-email" } });
    fireEvent.change(passwordField, { target: { value: "123456" } });

    const buttonElement = getByText("Entrar");

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalledWith();
    });
  });
});
