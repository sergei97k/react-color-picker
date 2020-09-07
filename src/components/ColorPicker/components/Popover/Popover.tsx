import React from "react";
import styled from "styled-components";

import { Portal } from "../Portal";

interface Popover {
  children: React.ReactNode;
  coords: {
    top?: string;
    left?: string;
  };
}

const PopoverStyled = styled.div`
  position: absolute;
  min-width: 150px;
  min-height: 40px;
  transform: translate(25px, 60px);
  background-color: white;
  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.3);

  &:before {
    content: "";
    position: absolute;
    top: -16px;
    right: 15px;
    z-index: 1;
    border: 8px solid transparent;
    border-bottom-color: #fff;
  }
`;

const Popover = ({ coords, children }: Popover) => {
  return (
    <Portal>
      <PopoverStyled style={coords}>{children}</PopoverStyled>
    </Portal>
  );
};

export default Popover;
