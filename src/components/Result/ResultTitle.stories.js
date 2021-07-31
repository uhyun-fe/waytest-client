import React from "react";
import ResultTitle from "./ResultTitle";

export default {
   title: "결과 유형 타이틀",
   component: ResultTitle,
};

const Template = (args) => <ResultTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
   title: "이런저런 유형!",
};
