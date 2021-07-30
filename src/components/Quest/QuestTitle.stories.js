import React from "react";
import QuestTitle from "./QuestTitle";

export default {
   title: "질문 타이틀",
   component: QuestTitle,
};

const Template = (args) => <QuestTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
   id: 1,
   title: "질문입니다.\n이런상황에서\n당신의 선택은?",
};
