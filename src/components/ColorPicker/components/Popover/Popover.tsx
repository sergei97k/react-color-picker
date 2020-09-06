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
  width: 200px;
  transform: translate(-100px, -100%);
`;

const Popover = ({ coords, children }: Popover) => {
  return (
    <Portal>
      <PopoverStyled style={coords}>{children}</PopoverStyled>
    </Portal>
  );
};

export default Popover;
