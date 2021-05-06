import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useAuth } from "../../hooks/AuthContext";

import UserService from "../../services/UserServices";

import MarcioFlix from "../../assets/MARCIOFLIX.png";

import { HeaderLeft, Head, HeaderRigth } from "./styles";

const Header = ({ scroll }) => {
  const { setLogedUser, user } = useAuth();

  const handleLogout = useCallback(async () => {
    await UserService.logout();
    localStorage.removeItem("@Marcioflix:user");
    setLogedUser({});
  }, [setLogedUser]);

  return (
    <Head isBlack={scroll}>
      <HeaderLeft>
        <Link to="/">
          <img src={MarcioFlix} alt="Netflix" />
        </Link>
      </HeaderLeft>
      <HeaderRigth>
        <Link to="/">
          {user && <PowerSettingsNewIcon data-testId="logout-button" onClick={() => handleLogout()} />}
        </Link>
      </HeaderRigth>
    </Head>
  );
};

export default Header;
