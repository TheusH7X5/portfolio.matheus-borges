import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const NavItem = styled.h3`
  color: ${(props) =>
    props.isSelected && props.colorMode === "light"
      ? "#01B4AF"
      : props.isSelected
      ? "#2C98D8"
      : "auto"};
  position: relative;
  border-bottom: ${(props) =>
    props.isSelected && props.colorMode === "light"
      ? "2px solid #01B4AF"
      : props.isSelected
      ? "2px solid #2C98D8"
      : "auto"};
  &:after {
    content: "";
    width: 0%;
    height: 2px;
    background-color: ${(props) =>
      !props.isSelected && props.colorMode === "light"
        ? "#01B4AF"
        : props.isSelected
        ? "none"
        : "#2C98D8"};
    position: absolute;
    bottom: 0;
    left: 0;
    transition: ${(props) => (props.isSelected ? "none" : "0.5s ease-in-out")};
  }
  &:hover {
    &:after {
      width: ${(props) => (props.isSelected ? "0%" : "100%")};
    }
  }
`;
export const FlexLink = styled(Flex)`
  width: 50%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  animation: swing-in-top-fwd 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s
    both;

  @keyframes swing-in-top-fwd {
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }
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
