import React from "react";
import styled from "styled-components";

import { ColorRange, ColorSelect } from "./components";

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
  padding: 12px;
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

      <ColorRange />

      <ColorSelect />
    </Wrapper>
  );
};

export default ColorPicker;
