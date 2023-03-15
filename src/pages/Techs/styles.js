import styled from "styled-components";
import { motion } from "framer-motion";

export const ParallaxContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 1;

  h1 {
    position: absolute;
    -webkit-animation: appear 2s;
    transition: appear 2s;

    &:nth-child(1) {
      top: 20%;
      left: 70%;
      opacity: 0.2;
      font-size: 50px;
    }
    &:nth-child(2) {
      top: 63%;
      left: 40%;
      opacity: 0.5;
      font-size: 40px;
    }
    &:nth-child(3) {
      top: 55%;
      left: 0%;
      opacity: 0.8;
      font-size: 52px;
    }
    &:nth-child(4) {
      top: 25%;
      left: 35%;
      opacity: 1;
      font-size: 60px;
    }
    &:nth-child(5) {
      top: 43%;
      left: 40%;
      opacity: 0.7;
      font-size: 40px;
    }
    &:nth-child(6) {
      top: 60%;
      left: 65%;
      opacity: 0.8;
      font-size: 52px;
    }
    &:nth-child(7) {
      top: 30%;
      left: 55%;
      opacity: 0.5;
      font-size: 52px;
    }
    &:nth-child(8) {
      top: 60%;
      left: 20%;
      opacity: 0.6;
      font-size: 52px;
    }
    &:nth-child(9) {
      top: 13%;
      left: 63%;
      opacity: 0.6;
      font-size: 52px;
    }
    &:nth-child(10) {
      top: 10%;
      left: 47%;
      opacity: 0.6;
      font-size: 52px;
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
      transform: scale(0.001);
    }
  }
`;
