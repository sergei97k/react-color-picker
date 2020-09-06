import React, { useState } from "react";
import styled from "styled-components";

import { ColorIcon, ArrowIcon } from "./components";

export interface ColorPickerProps {
  /**
   * Value in HEX format
   */
  value: string;
  /**
   * Change handler
   */
  onChange: () => void;
  /**
   * Array of predefined colors
   */
  colors: {
    name: string;
    value: string;
  }[];
}

const Wrapper = styled.div`
  width: 300px;
  height: 44px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid lightgray;
`;
const Label = styled.span`
  display: inline-block;
  width: 200px;
  text-transform: uppercase;
  color: gray;
  font-weight: bold;
`;
const Button = styled.button`
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 0;
  background: transparent;
  width: 50px;
  height: 100%;
  border-left: 1px solid lightgray;
`;

const ColorPicker = ({ value, onChange, colors }: ColorPickerProps) => {
  const [isOpenSelect, setOpenSelect] = useState(false);
  const [isOpenRange, setOpenRange] = useState(false);
  const onClickSelect = () => setOpenSelect(true);
  const onClickRange = () => setOpenRange(true);

  return (
    <Wrapper>
      <Label>{value}</Label>

      <Button onClick={onClickRange}>
        <ColorIcon color={value} />
      </Button>

      <Button onClick={onClickSelect}>
        <ArrowIcon />
      </Button>
    </Wrapper>
  );
};

export default ColorPicker;
