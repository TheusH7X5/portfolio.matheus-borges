import React from "react";
import { Picture } from "./styles";

export const AvatarIcon = ({ size, colorMode, ...props }) => {
  return (
    <Picture
      size={size}
      {...props}
      colorMode={colorMode}
      layoutId="picture"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  );
};
