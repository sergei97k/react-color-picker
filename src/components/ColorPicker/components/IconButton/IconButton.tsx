import React, { MouseEvent } from "react";
import styled from "styled-components";

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = styled.button`
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 0;
  background: transparent;
  width: 50px;
  height: 100%;
  border-left: 1px solid lightgray;
  cursor: pointer;
`;

const IconButton = (props: IconButtonProps) => {
  return <Button {...props}>{props.children}</Button>;
};

export default IconButton;
