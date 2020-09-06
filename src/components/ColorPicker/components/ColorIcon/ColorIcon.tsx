import React from "react";
import styled from "styled-components";

interface ColorIconViewProps {
  color: string;
}

const ColorIconStyled = styled.div`
  width: 16px;
  height: 16px;
  display: inline-block;
  background-color: ${(props) => props.color};
`;

const ColorIcon = ({ color }: ColorIconViewProps) => (
  <ColorIconStyled color={color} />
);

export default ColorIcon;
