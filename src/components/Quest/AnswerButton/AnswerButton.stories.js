import React from "react";
import AnswerButton from "./AnswerButton";

export default {
   title: "AnswerButton",
   component: AnswerButton,
};

const Template = (args) => <AnswerButton {...args} />;

export const Default = Template.bind({});
Default.args = {
   item: {
      id: "1",
      title: "1번 선택지입니다.",
      value: 0,
      updatedAt: new Date(2021, 6, 28, 9, 0),
   },
};
