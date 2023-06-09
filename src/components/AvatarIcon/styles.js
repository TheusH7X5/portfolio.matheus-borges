import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Picture = styled(motion.img)`
  border-radius: 100%;
  border: ${(props) =>
    props.colorMode === "light" ? "1px solid #01B4AF" : "1px solid #2C98D8"};
  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          height: 8vw;
          width: 8vw;
          padding: 3px;
        `;
      case "md":
        return css`
          height: 10vw;
          width: 10vw;
          padding: 4px;
        `;
      case "lg":
        return css`
          height: 15vw;
          width: 15vw;
          padding: 7px;
        `;
      default:
        break;
    }
    return css``;
  }}
  @media screen and (max-width: 768px) {
    ${({ size }) => {
      switch (size) {
        case "sm":
          return css`
            height: 20vw;
            width: 20vw;
            padding: 2px;
          `;
        case "md":
          return css`
            height: 25vw;
            width: 25vw;
            padding: 2px;
          `;
        case "lg":
          return css`
            height: 30vw;
            width: 30vw;
            padding: 2px;
          `;
        default:
          break;
      }
      return css``;
    }}
  }
`;
