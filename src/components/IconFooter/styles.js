import styled from "styled-components";
import { motion } from "framer-motion";

export const FlexFooter = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  height: 50px;
  width: ${(props) => (props.location.pathname === "/" ? "200px" : "170px")};
`;
