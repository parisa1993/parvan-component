import * as React from "react";
import { Story } from "@storybook/react";
import { TextFieldProps } from "../components/TextField/TextFiels";
import TextFiels from "../components/TextField/TextFiels";

export default {
  title: "TextField",
  component: TextFiels,
};

const Template: Story<TextFieldProps> = (args) => <TextFiels {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "تست",
  id: "test",
  labelFor: "test",
  type: "text",
  value: "value",
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  type: "text",
  value: "value",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  label: "پسورد",
  value: "12345",
};
