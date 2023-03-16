import {
  Box,
  Button,
  Flex,
  Input,
  Textarea,
  useColorMode,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AvatarIcon } from "../../components/AvatarIcon";
import { IconFooter } from "../../components/IconFooter";
import { LdsEllipsis } from "../Home/styles";
import emailjs from "emailjs-com";

export const Contacts = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const [loadingButton, setloadingButton] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputSubject, setInputSubject] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  function SendEmail(e) {
    e.preventDefault();
    setloadingButton(true);
    const timer = setTimeout(function () {
      emailjs
        .sendForm(
          "emailMessage",
          "template_f8kr2v2",
          e.target,
          "LyBRajpOIZDBu-G6h"
        )
        .then(
          (result) => {
            toast({
              title: "Mensagem enviada com sucesso!",
              description: "Aguarde o retorno.",
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "top",
            });
          },
          (error) => {
            console.log(error.text);
            setloadingButton(false);
          }
        );
      setloadingButton(false);
      setInputName("");
      setInputEmail("");
      setInputSubject("");
      setInputMessage("");
      clearTimeout(timer);
    }, 500);
  }

  return (
    <Flex
      w="100%"
      align="center"
      justify="center"
      flexDir="column"
      h="calc(100vh - 80px)"
    >
      <Box marginTop={["-20px", 0, 0]}>
        <AvatarIcon
          size="md"
          name="Matheus Borges"
          src="https://github.com/theusH7X5.png"
          colorMode={colorMode}
        />
      </Box>
      <form onSubmit={SendEmail}>
        <VStack my="2rem" spacing={4} align="center" w="390px">
          <Input
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            w="390px"
            name="name"
            type="text"
            border={
              colorMode === "light" ? "1px solid #01B4AF" : "1px solid #2C98D8"
            }
            placeholder="Nome"
          />
          <Input
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            w="390px"
            type="text"
            name="subject"
            border={
              colorMode === "light" ? "1px solid #01B4AF" : "1px solid #2C98D8"
            }
            placeholder="Assunto"
          />
          <Input
            value={inputSubject}
            onChange={(e) => setInputSubject(e.target.value)}
            w="390px"
            type="text"
            name="email"
            border={
              colorMode === "light" ? "1px solid #01B4AF" : "1px solid #2C98D8"
            }
            placeholder="E-mail"
          />
          <Textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            w="390px"
            type="text"
            name="message"
            border={
              colorMode === "light" ? "1px solid #01B4AF" : "1px solid #2C98D8"
            }
            placeholder="Mensagem"
          />
          <Button
            type="submit"
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
            {loadingButton ? (
              <LdsEllipsis class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </LdsEllipsis>
            ) : (
              <span>Enviar</span>
            )}
          </Button>
        </VStack>
      </form>
      <IconFooter colorMode={colorMode} />
    </Flex>
  );
};
