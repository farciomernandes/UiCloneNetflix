import React, { createContext, useCallback, useState, useContext } from "react";
import UserService from "../services/UserServices";

import Firebase from "../utils/initializeFirebase";
import "firebase/auth";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [logedUser, setLogedUser] = useState(() => {
    const user = localStorage.getItem("@Marcioflix:user");

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {};
  });

  const signin = useCallback(async (email, password) => {
    try {
      await UserService.create(email, password);
      const user = Firebase.auth().currentUser;

      localStorage.setItem("@Marcioflix:user", JSON.stringify(user));
      setLogedUser(user);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const login = useCallback(async ({ email, password }) => {
    try {
      await UserService.authentication(email, password);
      const user = Firebase.auth().currentUser;

      localStorage.setItem("@Marcioflix:user", JSON.stringify(user));
      setLogedUser({ user });
    } catch (err) {
      console.log(err);
      window.alert("Senha ou email incorretos!");
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        signin,
        user: logedUser.user,
        login,
        setLogedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth mus be used whitin an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
