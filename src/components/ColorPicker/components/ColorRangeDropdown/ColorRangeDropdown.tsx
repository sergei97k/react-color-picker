import React, {
  ChangeEvent,
  Fragment,
  MouseEvent,
  useState,
  useRef,
} from "react";
import styled from "styled-components";

import { IconButton } from "../IconButton";
import { ColorIcon } from "../ColorIcon";
import { Popover } from "../Popover";

import { getElemCoords } from "../../../../helpers/coords";
import { hexToRgb, rgbToHex } from "../../../../helpers/convertColors";
import { useOutsideAlerter } from "../../../../hooks/useOutsideAlerter";

interface ColorRangeDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 15px;
`;
const ColorName = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  color: gray;
  font-weight: bold;
`;
const RangeItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const RangeInput = styled.input`
  margin: 0 0 0 10px;
  appearance: none;
  height: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  margin-left: 5px;
  background-color: ${(props) =>
    props.color === "success" ? "#4caf50" : "lightgray"};
  border: none;
  color: ${(props) => (props.color === "success" ? "white" : "gray")};
  padding: 4px 10px;
  text-align: center;
  text-transform: uppercase;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
`;

const DEFAULT_RANGE_SETTINGS = {
  min: 0,
  max: 255,
};

const getColorsArray = (color: string) => {
  const [r, g, b] = hexToRgb(color);
  return {
    inputs: [
      {
        ...DEFAULT_RANGE_SETTINGS,
        name: "r",
        value: r,
        color: "red",
      },
      {
        ...DEFAULT_RANGE_SETTINGS,
        name: "g",
        value: g,
        color: "green",
      },
      {
        ...DEFAULT_RANGE_SETTINGS,
        name: "b",
        value: b,
        color: "blue",
      },
    ],
    colors: { r, g, b },
  };
};

const ColorRangeDropdown = ({ value, onChange }: ColorRangeDropdownProps) => {
  const [isOpen, setOpen] = useState(false);
  const [coords, setCoords] = useState({ left: 0, top: 0 });
  const [localColor, setLocalColor] = useState("");
  const color = localColor || value;
  const arrowPosition = coords.left - 32;

  const onClose = () => {
    setLocalColor("");
    setOpen(false);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onClose);

  const renderRangeList = () => {
    const { inputs, colors } = getColorsArray(color);

    const onClickOk = () => {
      onChange(color);
      onClose();
    };

    return (
      <RangeWrapper>
        {inputs.map((input) => {
          const onChangeRange = (e: ChangeEvent<HTMLInputElement>) => {
            const { name, value: inputValue } = e.target;
            const newColor = rgbToHex({
              ...colors,
              [name]: Number(inputValue),
            });
            setLocalColor(newColor);
          };

          return (
            <RangeItem key={input.name}>
              <ColorName>{input.name}</ColorName>
              <RangeInput {...input} type="range" onChange={onChangeRange} />
            </RangeItem>
          );
        })}

        <Buttons>
          <Button color="default" onClick={onClose}>
            Cancel
          </Button>
          <Button color="success" onClick={onClickOk}>
            Ok
          </Button>
        </Buttons>
      </RangeWrapper>
    );
  };

  const onClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (isOpen) {
      setOpen(false);
    } else {
      const node = e.target as HTMLElement;
      const { left, top } = getElemCoords(node);

      setCoords({
        left: left / 2,
        top,
      });
      setOpen(true);
    }
  };

  return (
    <Fragment>
      <IconButton onClick={onClick}>
        <ColorIcon color={color} />
      </IconButton>

      {isOpen && (
        <Popover
          coords={coords}
          arrowPosition={arrowPosition}
          innerRef={wrapperRef}
        >
          {renderRangeList()}
        </Popover>
      )}
    </Fragment>
  );
};

export default ColorRangeDropdown;
