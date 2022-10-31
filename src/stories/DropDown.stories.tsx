import * as React from "react";
import { Story } from "@storybook/react";
import { DropDownProps } from "../components/DropDown/DropDown";
import DropDown from "../components/DropDown/DropDown";

export default {
  title: "DropDown",
  component: DropDown,
};

const Template: Story<DropDownProps> = (args) => <DropDown {...args} />;

export const example = Template.bind({});
example.args = {
  name: "test",
  disabled: false,
  selectClass: "selectClass",
  placeholder: "placeholder",
  options: [
    { key: "1", value: "abc", onChange: () => {} },
    { key: "2", value: "yuh", onChange: () => {} },
  ],
  onChange: (value: any) => {
    console.log(value);
  },
};
