import React from "react";
import styled from "styled-components";

const ArrowIconStyled = styled.div`
  width: 0;
  height: 0;
  margin: auto;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid gray;
`;

const ArrowIcon = () => <ArrowIconStyled />;

export default ArrowIcon;
