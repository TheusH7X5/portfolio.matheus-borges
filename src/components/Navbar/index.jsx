import React from "react";
import { Link } from "react-router-dom";
import { FlexLink, NavItem } from "./styles";

export const Navbar = ({ location, colorMode, languageReducer }) => {

  return (
    <FlexLink>
      <Link to="/">
        <NavItem colorMode={colorMode} isSelected={location.pathname === "/"}>
          {languageReducer ? 'Início' : 'Home'}
        </NavItem>
      </Link>
      <Link to="/techs">
        <NavItem
          colorMode={colorMode}
          isSelected={location.pathname === "/techs"}
        >
          {languageReducer ? 'Tecnologia' : 'Tecnology'}
        </NavItem>
      </Link>
      <Link to="/portfolio">
        <NavItem
          colorMode={colorMode}
          isSelected={location.pathname === "/portfolio"}
        >
          {languageReducer ? 'Portfólio' : 'Portfolio'}
        </NavItem>
      </Link>
      <Link to="/contacts">
        <NavItem
          colorMode={colorMode}
          isSelected={location.pathname === "/contacts"}
        >
          {languageReducer ? 'Contato' : 'Contact'}
        </NavItem>
      </Link>
    </FlexLink>
  );
};
