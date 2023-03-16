import { IconButton } from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Navbar } from "../Navbar";
import { useLocation } from "react-router-dom";
import { FlexContainer } from "../Navbar/styles";

export const Header = ({ colorMode, toggleColorMode }) => {
  const location = useLocation();

  return (
    <FlexContainer
      boxShadow={
        colorMode === "light"
          ? "#C9FCFB 0px 10px 20px,#99ECEA 0px 6px 6px"
          : "#3E9FDF 0px 10px 20px,#2C98D8 0px 6px 6px"
      }
    >
      <Navbar colorMode={colorMode} location={location} />
      <IconButton
        my="auto"
        bgColor={colorMode === "light" ? "white" : "#1A202C"}
        _hover={{ transition: "opacity 0.2s", opacity: 0.8 }}
        transition="opacity 0.2s"
        _active={{
          backgroundColor: colorMode === "light" ? "white" : "#1A202C",
        }}
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      />
    </FlexContainer>
  );
};
