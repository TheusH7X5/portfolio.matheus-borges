import { Box, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  downloadCurriculumLink,
  imgProfileGitHub,
  nameProfileGitHub,
  urlDownload,
} from "../../api/urls";
import { AvatarIcon } from "../../components/AvatarIcon";
import { TextHome } from "../../components/TextHome";
import { languageEn, languagePtBr } from "../../constants/stringsLanguage";
import { IconFooter } from "./../../components/IconFooter/index";
import {
  ButtonDownload,
  ContainerFlexImages,
  FlexContainerHomeProfile,
  HeadingName,
  NameAndRole,
  TextRole,
} from "./styles";

const Home = ({ languageReducer }) => {
  const { colorMode } = useColorMode();
  const [download, setDownload] = useState("");

  return (
    <Box h="calc (100vh - 60px)">
      <FlexContainerHomeProfile>
        {colorMode === "light" ? (
          <ContainerFlexImages>
            <AvatarIcon
              size={"lg"}
              name={nameProfileGitHub}
              src={imgProfileGitHub}
              colorMode={colorMode}
            />
          </ContainerFlexImages>
        ) : (
          <AvatarIcon
            size={"lg"}
            name={nameProfileGitHub}
            src={imgProfileGitHub}
            colorMode={colorMode}
          />
        )}
        <NameAndRole
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <HeadingName>{nameProfileGitHub}</HeadingName>
          <TextRole>
            {languageReducer ? languagePtBr.TextRole : languageEn.TextRole}
          </TextRole>
          <a href={downloadCurriculumLink} style={{ textDecoration: "none" }}>
            <ButtonDownload
              onClick={() => {
                setDownload(urlDownload);
                setCount((old) => old + 1);
              }}
              colorMode={colorMode}
            >
              {languageReducer
                ? languagePtBr.curriculum
                : languageEn.curriculum}
            </ButtonDownload>
          </a>
          {download && (
            <iframe style={{ display: "none" }} src={urlDownload}></iframe>
          )}
        </NameAndRole>
      </FlexContainerHomeProfile>
      <Box mb="3rem" mt="1rem">
        {languageReducer
          ? languagePtBr.text.map((text, index) => {
              return <TextHome key={index} text={text} />;
            })
          : languageEn.text.map((text, index) => {
              return <TextHome key={index} text={text} />;
            })}
      </Box>
      <IconFooter colorMode={colorMode} />
    </Box>
  );
};

export default connect((state) => ({ languageReducer: state.languageReducer }))(
  Home
);
