import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SignIn from "../../pages/SignIn";
import FakeUser from '../fakes/FakeUserService';

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

jest.mock("../../components/Header", () => React.Component );

describe("SignIn Page", () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });


  //Teste de integração ou de sistema. O usuário pode realizar login com credenciais validas.
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

  //Teste de integração ou de sistema. O usuário não pode realizar login com credenciais inválidas.
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


  //Teste unitário, o usuário deve poder criar uma conta e se authenticar.
 it("should not be able create and authenticate in your account", async () => {

    const user = {
      email: 'newtest@gmail.com',
      password: '123456'
    }

    const usersAfter = FakeUser.totalUsers();

    const created = FakeUser.create(user.email, user.password);

    const usersBefore = FakeUser.totalUsers();

    expect(usersBefore).toEqual((usersAfter + 1));

    const authenticate = FakeUser.authenticate(user.email, user.password);

    expect(authenticate).toBeTruthy();

    });
  });

});