import React from "react";

export const IconLink = ({ Icon, link, colorMode, location }) => {
  return (
    <a href={link} target="_blank">
      <Icon
        size={location.pathname === '/' ? "50px" : "30px"}
        color={colorMode === "light" ? "#01B4AF" : "#2C98D8"}
      />
    </a>
  );
};
