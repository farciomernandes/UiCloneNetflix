import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Header from "../../components/Header";

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

});
