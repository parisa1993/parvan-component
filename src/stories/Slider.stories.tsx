import * as React from "react";
import { Story } from "@storybook/react";
import { SliderProps } from "../components/Slider/Slider";
import Slider from "../components/Slider/Slider";

export default {
  title: "Slider",
  component: Slider,
};

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Example = Template.bind({});
Example.args = {
  logo: "Test",
  smallLogo: "TS",
  username: "parvan.test",
  menuItems: [{ id: "1", title: "کاربران", path: "/users" }],
  onItemClicked: () => {},
  onExitClicked: () => {},
};
