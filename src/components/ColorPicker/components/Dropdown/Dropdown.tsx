import React, { Fragment, MouseEvent, useState } from "react";
import styled from "styled-components";

import { ArrowIcon } from "../ArrowIcon";
import { Popover } from "../Popover";

interface DropdownProps {
  children: React.ReactNode;
  renderCustomIcon?: () => {};
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
`;

const Dropdown = ({ children, renderCustomIcon }: DropdownProps) => {
  const [isOpen, setOpen] = useState(false);
  const [coords, setCoords] = useState({});

  const onClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const node = e.target as HTMLElement;
    const rect = node.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width / 2,
      top: rect.y + window.scrollY,
    });
    setOpen(true);
  };

  return (
    <Fragment>
      <Button onClick={onClick}>
        {renderCustomIcon ? renderCustomIcon() : <ArrowIcon />}
      </Button>

      {isOpen && <Popover coords={coords}>{children}</Popover>}
    </Fragment>
  );
};

export default Dropdown;
