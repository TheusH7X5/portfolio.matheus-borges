import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { AvatarIcon } from "../../components/AvatarIcon";
import { TextHome } from "../../components/TextHome";
import { IconFooter } from "./../../components/IconFooter/index";
import { NameAndRole } from "./styles";

export const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box h="calc (100vh - 60px)">
      <Flex
        h="250px"
        align="center"
        mx="auto"
        w="1000px"
        justify="space-around"
      >
        <AvatarIcon
          size="lg"
          name="Matheus Borges"
          src="https://github.com/theusH7X5.png"
          colorMode={colorMode}
        />
        <NameAndRole initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay: .5, duration: 1}}>
          <Heading mt="1rem" lineHeight="1.4" size="3xl">
            Matheus Borges
          </Heading>
          <Text mt=".5rem" lineHeight="1.6" fontSize="1.7rem" as="h1">
            Desenvolvedor Full Stack
          </Text>
        </NameAndRole>
      </Flex>
      <TextHome
        text="Profissional em transição para área de Tecnologia da Informação, com
       habilitação para atuação como Desenvolvedor Web FullStack, com
       atendimento e levantamento de requisitos de clientes internos e
       externos, conhecimento em React.js, JavaScript, CSS, HTML, Next.js,
       Node.js, Typescript, MySQL, Laravel, PHP, Docker, AWS, API, RESTful e
       Google Worskpace."
      />
      <TextHome
        text="Construção de relacionamento com equipes, fornecedores de tecnologias,
        prestadores de serviços e clientes, com alinhamento para atendimento de
        prazos e qualidade nas soluções."
      />
      <TextHome
        text="Experiência em Vendas, com fortes
        habilidades ao trabalhar em equipe, resiliência, assumir riscos,
        networking, domínio das técnicas de storytellin e de criar rapport."
      />
      <TextHome
        text="Habilidades de comunicação interpessoal, monitoramento de prazos no
        desenvolvimento de projetos, desenvolvimento de equipes e estruturação
        de departamentos com foco em eficiência."
      />
      <IconFooter colorMode={colorMode} />
    </Box>
  );
};
