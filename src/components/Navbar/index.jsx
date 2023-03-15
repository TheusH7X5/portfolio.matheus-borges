import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { NavItem } from './styles';

export const Navbar = ({ location, colorMode }) => {
  return (
    <Flex
      as="nav"
      w="50%"
      my="auto"
      justify="space-around"
    >
      <Link to="/">
        <NavItem colorMode={colorMode} isSelected={location.pathname === "/"}>Home</NavItem>
      </Link>
      <Link to="/techs">
        <NavItem colorMode={colorMode} isSelected={location.pathname === "/techs"}>Tecnology</NavItem>
      </Link>
      <Link to="/portfolio">
        <NavItem colorMode={colorMode} isSelected={location.pathname === "/portfolio"}>
          Portfolio
        </NavItem>
      </Link>
      <Link to="/contacts">
        <NavItem colorMode={colorMode} isSelected={location.pathname === "/contacts"}>
          Contact
        </NavItem>
      </Link>
    </Flex>
  );
};
