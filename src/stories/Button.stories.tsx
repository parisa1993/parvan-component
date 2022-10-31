import * as React from "react";
import { Story } from "@storybook/react";
import { ButtonProps } from "../components/Button/Button";
import Button from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "test",
  primary: true,
  disabled: false,
  size: "small",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "test",
  primary: false,
  size: "small",
  disabled: false,
};
