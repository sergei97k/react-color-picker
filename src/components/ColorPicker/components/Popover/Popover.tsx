import React from "react";
import styled from "styled-components";

interface Popover {
  children: React.ReactNode;
  coords: {
    top?: number;
    left?: number;
  };
  arrowPosition?: "left" | "center" | "right" | number;
  innerRef?: React.RefObject<HTMLDivElement>;
}

// @ts-ignore next-line
const handleArrowPosition = ({ arrowPosition }) => {
  switch (arrowPosition) {
    case "left":
      return "left: 15px";
    case "right":
      return "right: 15px";
    case "center":
      return "left: 50%; translate: transformX(-50%);";
    default:
      return `left: ${arrowPosition}px`;
  }
};

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
    // @ts-ignore next-line
    ${(props) => handleArrowPosition(props)};
    z-index: 1;
    border: 8px solid transparent;
    border-bottom-color: #fff;
  }
`;

const Popover = ({ coords, children, arrowPosition, innerRef }: Popover) => {
  const props = {
    style: coords,
    arrowPosition,
    ref: innerRef,
  };

  return <PopoverStyled {...props}>{children}</PopoverStyled>;
};

export default Popover;
