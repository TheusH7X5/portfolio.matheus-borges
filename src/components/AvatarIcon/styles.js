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
          padding: 5px;
        `;
      case "md":
        return css`
          height: 10vw;
          width: 10vw;
          padding: 6px;
        `;
      case "lg":
        return css`
          height: 15vw;
          width: 15vw;
          padding: 10px;
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
            height: 15vw;
            width: 15vw;
            padding: 2px;
          `;
        case "md":
          return css`
            height: 15vw;
            width: 15vw;
            padding: 2px;
          `;
        case "lg":
          return css`
            height: 15vw;
            width: 15vw;
            padding: 2px;
          `;
        default:
          break;
      }
      return css``;
    }}
  }
`;
