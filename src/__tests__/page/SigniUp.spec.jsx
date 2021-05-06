import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SignUp from "../../pages/SignUp";
import FakeUser from '../fakes/FakeUserService';

const signin = FakeUser.create(email, password);
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
      signin
    }),
  };
});

jest.mock("../../components/Header", () => "Header");

describe("SignUp Page", () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it("should be able create account with valid credentials", async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const emailField = getByPlaceholderText("Email");
    const passwordField = getByPlaceholderText("Senha");

    fireEvent.change(emailField, { target: { value: "example@email.com" } });
    fireEvent.change(passwordField, { target: { value: "123456" } });

    const buttonElement = getByText("Cadastrar");

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith("/dashboard");
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

  it("should not be able create account with exist credentials", async () => {

    const user = {
      email: 'teste@gmail.com',
      password: '123456'
    }

    const numberUsers = FakeUser.totalUsers();

    FakeUser.create(user);
    FakeUser.create(user);

    const newUsers = FakeUser.totalUsers();

    expect(newUsers).toEqual((numberUsers + 1));

  });
});