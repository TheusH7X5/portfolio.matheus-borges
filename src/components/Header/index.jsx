import { IconButton, Image, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Navbar } from "../Navbar";
import { useLocation } from "react-router-dom";
import { FlexContainer } from "../Navbar/styles";
import { connect, useDispatch, useSelector } from "react-redux";

const imgEUA =
  "data:image/png;base64,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";
const imgBR =
  "https://static.todamateria.com.br/upload/ba/nd/bandeira-do-brasil-og.jpg";

const Header = ({ colorMode, toggleColorMode, languageReducer }) => {

  const setLanguage = (language) => ({
    type: "SET_LANGUAGE",
    payload: language,
  });

  const location = useLocation();
  const languageValue = useSelector((state) => state.languageReducer);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setLanguage(!languageValue));
  };

  return (
    <FlexContainer
      boxShadow={
        colorMode === "light"
          ? "#C9FCFB 0px 10px 20px,#99ECEA 0px 6px 6px"
          : "#3E9FDF 0px 10px 20px,#2C98D8 0px 6px 6px"
      }
    >
      <Navbar
        languageReducer={languageReducer}
        colorMode={colorMode}
        location={location}
      />
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
      <Flex onClick={() => handleButtonClick()} ml="2px" cursor="pointer">
        <Image
          border={!languageReducer && "0.5px solid #1A202C"}
          src={imgEUA}
          w="20px"
          h="10px"
          my="auto"
        />
        <Box borderLeft="1px solid black" h="15px" my="auto" mx="1px" />
        <Image
          border={languageReducer && "0.5px solid #1A202C"}
          src={imgBR}
          w="20px"
          h="10px"
          my="auto"
        />
      </Flex>
    </FlexContainer>
  );
};

export default connect((state) => ({
  languageReducer: state.languageReducer,
}))(Header);
