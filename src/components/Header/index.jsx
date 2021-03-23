import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useAuth } from "../../context/AuthContext";

import UserService from "../../services/UserServices";

import MarcioFlix from "../../assets/MARCIOFLIX.png";

import { HeaderLeft, Head, HeaderRigth } from "./styles";

const Header = ({ scroll }) => {
  const { setLogedUser } = useAuth();

  const handleLogout = useCallback(async () => {
    await UserService.logout();
    localStorage.removeItem("@Marcioflix:user");
    setLogedUser({});
  }, []);

  return (
    <Head isBlack={scroll}>
      <HeaderLeft>
        <Link to="/">
          <img src={MarcioFlix} alt="Netflix" />
        </Link>
      </HeaderLeft>
      <HeaderRigth>
        <Link to="/">
          <PowerSettingsNewIcon onClick={() => handleLogout()} />
        </Link>
      </HeaderRigth>
    </Head>
  );
};

export default Header;
