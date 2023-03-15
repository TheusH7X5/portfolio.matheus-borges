import React from "react";
import { IconLink } from "./IconLink";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { FlexFooter } from "./styles";

export const IconFooter = ({ colorMode }) => {
  const location = useLocation();

  return (
    <FlexFooter
      location={location}
      layoutId="footer"
      transition={{ duration: .5 }}
    >
      <IconLink
        location={location}
        colorMode={colorMode}
        link="https://github.com/TheusH7X5"
        Icon={AiFillGithub}
      />
      <IconLink
        location={location}
        colorMode={colorMode}
        link="https://www.linkedin.com/in/matheus-borges-h7x5/"
        Icon={AiFillLinkedin}
      />
      <IconLink
        location={location}
        colorMode={colorMode}
        link="https://www.instagram.com/theush7x5/"
        Icon={AiOutlineInstagram}
      />
    </FlexFooter>
  );
};
