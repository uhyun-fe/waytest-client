import React from "react";
import ProgressBar from "./ProgressBar";

export default {
   title: "진행상황 BAR",
   component: ProgressBar,
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
   id: 8,
   total: 10,
};
