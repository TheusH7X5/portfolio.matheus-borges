import { Box, Text, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AvatarIcon } from "../../components/AvatarIcon";
import { TextHome } from "../../components/TextHome";
import { IconFooter } from "./../../components/IconFooter/index";
import {
  FlexContainerHomeProfile,
  HeadingName,
  NameAndRole,
  TextRole,
} from "./styles";

export const Home = () => {
  const { colorMode } = useColorMode();
  const [mobileView, setmobileView] = useState(false);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setmobileView(true);
    } else {
      setmobileView(false);
    }
  }, []);

  return (
    <Box h="calc (100vh - 60px)">
      <FlexContainerHomeProfile>
        <AvatarIcon
          size="lg"
          name="Matheus Borges"
          src="https://github.com/theusH7X5.png"
          colorMode={colorMode}
        />
        <NameAndRole
          colorMode={colorMode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <HeadingName>Matheus Borges</HeadingName>
          <TextRole>Desenvolvedor Full Stack</TextRole>
        </NameAndRole>
      </FlexContainerHomeProfile>
      <TextHome
        mobileView={mobileView}
        text="Profissional em transição para área de Tecnologia da Informação, com
       habilitação para atuação como Desenvolvedor Web FullStack, com
       atendimento e levantamento de requisitos de clientes internos e
       externos, conhecimento em React.js, JavaScript, CSS, HTML, Next.js,
       Node.js, Typescript, MySQL, Laravel, PHP, Docker, AWS, API, RESTful e
       Google Worskpace."
      />
      <TextHome
        mobileView={mobileView}
        text="Construção de relacionamento com equipes, fornecedores de tecnologias,
        prestadores de serviços e clientes, com alinhamento para atendimento de
        prazos e qualidade nas soluções."
      />
      <TextHome
        mobileView={mobileView}
        text="Experiência em Vendas, com fortes
        habilidades ao trabalhar em equipe, resiliência, assumir riscos,
        networking, domínio das técnicas de storytellin e de criar rapport."
      />
      <TextHome
        mobileView={mobileView}
        text="Habilidades de comunicação interpessoal, monitoramento de prazos no
        desenvolvimento de projetos, desenvolvimento de equipes e estruturação
        de departamentos com foco em eficiência."
      />
      <IconFooter colorMode={colorMode} />
    </Box>
  );
};
