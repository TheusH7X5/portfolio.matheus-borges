import { motion } from "framer-motion";
import styled from "styled-components";

export const TextMotion = styled(motion.h1)`
  font-size: 15px;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
