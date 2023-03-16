import {
  Box,
  Button,
  Flex,
  Input,
  Textarea,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AvatarIcon } from "../../components/AvatarIcon";
import { IconFooter } from "../../components/IconFooter";

export const Contacts = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      align="center"
      justify="center"
      flexDir="column"
      h="calc(100vh - 80px)"
    >
      <Box marginTop='-20px'>
        <AvatarIcon
          size="lg"
          name="Matheus Borges"
          src="https://github.com/theusH7X5.png"
          colorMode={colorMode}
        />
      </Box>
      <form>
        <VStack my="2rem" spacing={4} align="center" w="390px">
          <Input
            name="name"
            type="text"
            border={
              colorMode === "light" ? "1px solid #01B4AF" : "1px solid #2C98D8"
            }
            placeholder="Nome"
          />
          <Input
            type="text"
            name="Assunto"
            border={
              colorMode === "light" ? "1px solid #01B4AF" : "1px solid #2C98D8"
            }
            placeholder="Assunto"
          />
          <Input
            type="text"
            name="email"
            border={
              colorMode === "light" ? "1px solid #01B4AF" : "1px solid #2C98D8"
            }
            placeholder="E-mail"
          />
          <Textarea
            type="text"
            name="mensagem"
            border={
              colorMode === "light" ? "1px solid #01B4AF" : "1px solid #2C98D8"
            }
            placeholder="Mensagem"
          />
          <Button
            bgColor={colorMode === "light" ? "#01B4AF" : "#2C98D8"}
            mx="auto"
            color="white"
            w="100px"
            _hover={
              colorMode === "light"
                ? { bgColor: "#01B4AF", opacity: 0.8 }
                : { bgColor: "#2C98D8", opacity: 0.8 }
            }
          >
            Enviar
          </Button>
        </VStack>
      </form>
      <IconFooter colorMode={colorMode} />
    </Flex>
  );
};
