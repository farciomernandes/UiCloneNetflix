import React from "react";
import MarcioFlix from "../../assets/MARCIOFLIX.png";
import userImg from "../../assets/user.jpg";

import { HeaderLeft, Head, HeaderRigth } from "./styles";

const Header = ({ scroll }) => {
  return (
    <Head isBlack={scroll}>
      <HeaderLeft>
        <a href="/">
          <img src={MarcioFlix} alt="Netflix" />
        </a>
      </HeaderLeft>
      <HeaderRigth>
        <a href="/">
          <img src={userImg} alt="Usuário" />
        </a>
      </HeaderRigth>
    </Head>
  );
};

export default Header;
