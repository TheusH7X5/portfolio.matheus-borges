import styled from "styled-components";

export const NavItem = styled.h3`
  color: ${(props) => props.isSelected && props.colorMode === 'light' ? "#01B4AF" : props.isSelected ? '#2C98D8': 'auto'};
`;
