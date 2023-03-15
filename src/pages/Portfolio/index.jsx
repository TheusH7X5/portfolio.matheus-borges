import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { AvatarIcon } from "../../components/AvatarIcon";
import { IconFooter } from "../../components/IconFooter";
import { apiPortfolio } from "./../../api/apiPortfolio";
import { motion } from "framer-motion";

export const Portfolio = () => {
  const { colorMode } = useColorMode();
  const GridMotion = motion(Grid);
  const GridItemMotion = motion(GridItem);

  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box>
      <Box w="1000px" mx="auto" mb="1rem">
        <Flex w="100%" justify="center">
          <AvatarIcon
            size="md"
            name="Matheus Borges"
            src="https://github.com/theusH7X5.png"
            colorMode={colorMode}
          />
        </Flex>
        <IconFooter colorMode={colorMode} />
      </Box>
      <GridMotion
        mb="2rem"
        initial="hidden"
        animate="visible"
        templateColumns="repeat(3, 1fr)"
        h="auto"
        w="1000px"
        mx="auto"
        gap={6}
        variants={containerVariants}
      >
        {apiPortfolio.map((portfolio) => {
          return (
            <GridItemMotion
              variants={itemVariants}
              key={portfolio.id}
              w="100%"
              h="auto"
            >
              <a
                href={portfolio.link}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Image
                  border={
                    colorMode === "light"
                      ? "1px solid #01B4AF"
                      : "1px solid #2C98D8"
                  }
                  borderRadius="10px"
                  key={portfolio.id}
                  src={portfolio.src}
                  alt={portfolio.alt}
                  w="100%"
                  h="auto"
                  objectFit="cover"
                />
              </a>
            </GridItemMotion>
          );
        })}
      </GridMotion>
    </Box>
  );
};
