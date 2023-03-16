import styled from "styled-components";
import { motion } from "framer-motion";
import { Box, Flex, Text } from "@chakra-ui/react";

export const NameAndRole = styled(motion.div)`
  padding-left: 1rem;
  width: 600px;
  font-family: "Lora", serif;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 0.5rem;
    align-items: center;
  }
`;
export const HeadingName = styled(Text)`
  margin-top: 1rem;
  line-height: 1.4;
  font-size: 4rem;
  font-weight: bold;
  @media screen and (max-width: 850px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const TextRole = styled.h1`
  margin-top: 0.5rem;
  line-height: 1.6;
  font-size: 25px;
  color: gray;
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;

export const FlexContainerHomeProfile = styled(Flex)`
  height: 250px;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  max-width: 1000px;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    width: 80%;
    flex-direction: column;
    margin: 2rem auto 0 auto;
  }
`;

export const ContainerFlexImages = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    left: -40%;
    z-index: 2;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
    -webkit-animation: shine all ease 3s;
    animation: shine 5s;
  }
  img {
    overflow: hidden;
    float: left;
  }
  @-webkit-keyframes shine {
    100% {
      left: 200%;
    }
  }
  @keyframes shine {
    100% {
      left: 200%;
    }
  }
`;

export const LdsEllipsis = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  left: -18px;
  div {
    background: #fff;
    position: absolute;
    top: 15px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export const ButtonDownload = styled.button`
  background: none;
  border: ${(props) =>
    props.colorMode === "light" ? "2px solid #01B4AF" : "2px solid #2C98D8"};
  font-family: "Lora", serif;
  text-transform: uppercase;
  padding: 8px 14px;
  min-width: 150px;
  margin-top: 5px;
  cursor: pointer;
  transition: color 0.4s linear;
  position: relative;
  z-index: 999;
  &:hover {
    color: #fff;
    &::before {
      transform: scaleX(1);
    }
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${(props) =>
      props.colorMode === "light" ? "#01B4AF" : "#2C98D8"};
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scaleX(0);
  }
`;
