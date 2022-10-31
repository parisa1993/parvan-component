import * as React from "react";
import { Story } from "@storybook/react";
import { DatePickerProps } from "../components/DatePicker/DatePicker";
import DatePicker from "../components/DatePicker/DatePicker";

export default {
  title: "DatePicker",
  component: DatePicker,
};

const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />;

export const Example = Template.bind({});
Example.args = {
  onChange: () => {},
};
