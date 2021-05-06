import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Header from "../../components/Header";

const mockedHistoryPush = jest.fn();

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
            logout: jest.fn(),
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
            logout: jest.fn(),
            user: null
          }),
        };
      });
      const { getByTestId } = render(<Header />);

      expect(getByTestId("logout-button")).toBeTruthy();
  });

});
