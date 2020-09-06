import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import ColorPicker, { ColorPickerProps } from "./ColorPicker";

export default {
  title: "ColorPicker",
  component: ColorPicker,
} as Meta;

const Template: Story<ColorPickerProps> = (args) => <ColorPicker {...args} />;

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
