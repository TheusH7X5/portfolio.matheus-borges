import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const NavItem = styled.h3`
  color: ${(props) =>
    props.isSelected && props.colorMode === "light"
      ? "#01B4AF"
      : props.isSelected
      ? "#2C98D8"
      : "auto"};
`;
export const FlexLink = styled(Flex)`
  width: 50%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FlexContainer = styled(Flex)`
  width: 100%;
  padding: 0 2rem;
  justify-content: space-between;
  height: 60px;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    height: 50px;
    justify-content: space-around;
    padding: 0;
  }
`;
