import styled from "styled-components";
import { motion } from "framer-motion";
import { Flex, Heading, Text } from "@chakra-ui/react";

export const NameAndRole = styled(motion.div)`
  padding-left: 1rem;
  width: 600px;
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
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const TextRole = styled.h1`
  margin-top: 0.5rem;
  line-height: 1.6;
  font-size: 25px;
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
  }
`;
