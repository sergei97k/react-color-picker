import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import ColorPicker, { ColorPickerProps } from "./ColorPicker";

export default {
  title: "ColorPicker",
  component: ColorPicker,
} as Meta;

const Template: Story<ColorPickerProps> = (args) => {
  const [value, onChange] = useState(args.value);
  return <ColorPicker {...args} value={value} onChange={onChange} />;
};

export const Example = Template.bind({});
Example.args = {
  value: "#ffcc33",
  onChange: () => {
    return null;
  },
  colors: [
    {
      name: "red",
      value: "#ff0000",
    },
    {
      name: "yellow",
      value: "#ffff00",
    },
    {
      name: "green",
      value: "#008000",
    },
    {
      name: "blue",
      value: "#0000ff",
    },
  ],
};
