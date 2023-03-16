import { Box, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import { AvatarIcon } from "../../components/AvatarIcon";
import { TextHome } from "../../components/TextHome";
import { IconFooter } from "./../../components/IconFooter/index";
import {
  ButtonDownload,
  ContainerFlexImages,
  FlexContainerHomeProfile,
  HeadingName,
  NameAndRole,
  TextRole,
} from "./styles";

const urlDownload =
  "https://drive.google.com/uc?export=download&id=1RqFnb82-EDWIsLS8oLACLzmSKWuAWd0y";

export const Home = () => {
  const { colorMode } = useColorMode();
  const [download, setDownload] = useState("");

  return (
    <Box h="calc (100vh - 60px)">
      <FlexContainerHomeProfile>
        {colorMode === "light" ? (
          <ContainerFlexImages>
            <AvatarIcon
              size={"lg"}
              name="Matheus Borges"
              src="https://github.com/theusH7X5.png"
              colorMode={colorMode}
            />
          </ContainerFlexImages>
        ) : (
          <AvatarIcon
            size={"lg"}
            name="Matheus Borges"
            src="https://github.com/theusH7X5.png"
            colorMode={colorMode}
          />
        )}
        <NameAndRole
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <HeadingName>Matheus Borges</HeadingName>
          <TextRole>Desenvolvedor Full Stack</TextRole>
          <a
            href="https://drive.google.com/uc?export=download&id=1RqFnb82-EDWIsLS8oLACLzmSKWuAWd0y"
            style={{ textDecoration: "none" }}
          >
            <ButtonDownload
              onClick={() => {
                setDownload(urlDownload);
                setCount((old) => old + 1);
              }}
              colorMode={colorMode}
            >
              Currículo
            </ButtonDownload>
          </a>
          {download && (
            <iframe style={{ display: "none" }} src={urlDownload}></iframe>
          )}
        </NameAndRole>
      </FlexContainerHomeProfile>
      <Box mt="1rem">
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
      </Box>
      <IconFooter colorMode={colorMode} />
    </Box>
  );
};
