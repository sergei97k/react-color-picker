import React from "react";
import styled from "styled-components";

import { ColorListDropdown } from "./components";

export interface ColorPickerProps {
  /**
   * Value in HEX format
   */
  value: string;
  /**
   * Change handler
   */
  onChange: (value: string) => void;
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

const ColorPicker = ({ value, onChange, colors }: ColorPickerProps) => {
  return (
    <Wrapper>
      <Label>{value}</Label>

      <ColorListDropdown colors={colors} onChange={onChange} />
    </Wrapper>
  );
};

export default ColorPicker;
