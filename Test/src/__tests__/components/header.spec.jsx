import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "../../components/Header";
import FakeUser from '../fakes/FakeUserService';

const mockedHistoryPush = jest.fn();
const logout = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }) => children,
  };
});

describe("Header Component", () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });
  
  
  //Teste de sistema OU INTEGRAÇÃO onde o botao power não renderiza se não existir usuário logado
  it("should not be able render a logout-icon if user cannot exist", async () => {
    jest.mock("../../hooks/AuthContext", () => {
        return {
          useAuth: () => ({
            logout,
            user: null
          }),
        };
      });

    const { getByTestId } = render(<Header />);

    expect(getByTestId("logout-button")).not.toBeTruthy();
  });

  //Teste de integração OU DE SISTEMA que o botão power só renderiza se o usuário estiver logado.
  it("should be able render a logout-icon if user cannot exist", async () => {
    jest.mock("../../hooks/AuthContext", () => {
        return {
          useAuth: () => ({
            logout,
            user: {
              email: 'example@gmail.com',
              password: '1234567'
            }
          }),
        };
      });
      const { getByTestId } = render(<Header />);

      expect(getByTestId("logout-button")).toBeTruthy();
  });

  //Teste de sistema, o usuário logado pode realizar loggout.

  it("should be able the user call logout function", async () => {

    jest.mock("../../hooks/AuthContext", () => {
        return {
          useAuth: () => ({
            logout,
            user: {
              email: 'example@gmail.com',
              password: '1234567'
            }
          }),
        };
      });
      const { getByTestId } = render(<Header />);

      const logoutButton = getByTestId("logout-button");

      fireEvent.click(logoutButton);
      
      expect(logout).toHaveBeenCalledWith();
  });

  //Teste unitário, so é possível o usuário realizar loggou se estiver logado

  it("should cannot be able the user call logout function if user is not logged", async () => {

      const user = {};

      const isLogged = FakeUser.logout(user);
      
      expect(isLogged).toEquals(null);
  });

});
