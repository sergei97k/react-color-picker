import React, { Fragment, MouseEvent, useState, useRef } from "react";
import styled from "styled-components";

import { ArrowIcon } from "../ArrowIcon";
import { Popover } from "../Popover";
import { ColorIcon } from "../ColorIcon";
import { IconButton } from "../IconButton";

import { getElemCoords } from "../../../../helpers/coords";
import { useOutsideAlerter } from "../../../../hooks/useOutsideAlerter";

interface ColorListDropdownProps {
  onChange: (value: string) => void;
  colors: {
    name: string;
    value: string;
  }[];
}

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 6px 15px;
  cursor: pointer;

  font-size: 14px;
  text-transform: uppercase;
  color: grey;
  font-weight: bold;
  border-bottom: 1px solid lightgray;

  &:last-child {
    border: none;
  }

  &:hover {
    background-color: #1ea7fd;
  }
`;

const ColorListDropdown = ({ colors, onChange }: ColorListDropdownProps) => {
  const [isOpen, setOpen] = useState(false);
  const [coords, setCoords] = useState({});

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setOpen(false));

  const renderColorsList = () => {
    if (!colors.length) return null;

    return (
      <List>
        {colors.map(({ name, value: colorValue }) => {
          const onClickListItem = () => {
            onChange(colorValue);
            setOpen(false);
          };

          return (
            <ListItem key={colorValue} onClick={onClickListItem}>
              <span>{name}</span>
              <ColorIcon color={colorValue} />
            </ListItem>
          );
        })}
      </List>
    );
  };

  const onClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (isOpen) {
      setOpen(false);
    } else {
      const node = e.target as HTMLElement;
      const { left, top } = getElemCoords(node);

      setCoords({
        // 150px is popover width
        left: left - 150,
        top,
      });
      setOpen(true);
    }
  };

  return (
    <Fragment>
      <IconButton onClick={onClick}>
        <ArrowIcon />
      </IconButton>

      {isOpen && (
        <Popover coords={coords} arrowPosition="right" innerRef={wrapperRef}>
          {renderColorsList()}
        </Popover>
      )}
    </Fragment>
  );
};

export default ColorListDropdown;
