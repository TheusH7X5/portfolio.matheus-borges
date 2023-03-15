import React from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { AvatarIcon } from "../../components/AvatarIcon";
import { IconFooter } from "../../components/IconFooter";
import { techs } from "./../../constants/mock";
import { ParallaxWord } from "../../components/ParallaxWord";
import { ParallaxContainer } from "./styles";

export const Techs = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Flex
        position="absolute"
        align="center"
        mt="70px"
        ml="22%"
        w="200px"
        flexDir="column"
        justify="center"
      >
        <AvatarIcon
          size="sm"
          name="Matheus Borges"
          src="https://github.com/theusH7X5.png"
          colorMode={colorMode}
        />
        <IconFooter colorMode={colorMode} />
      </Flex>
      <ParallaxContainer>
        {techs.map((word) => {
          return (
            <ParallaxWord key={word.id} word={word}>
              {word.name}
            </ParallaxWord>
          );
        })}
      </ParallaxContainer>
    </Box>
  );
};
