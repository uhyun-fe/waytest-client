import React from "react";

import QuestTitle from "./QuestTitle";
import AnswerBox from "./AnswerBox";
import ProgressBar from "./ProgressBar";

export default {
   title: "질문페이지",
};

const TitleTemplate = (args) => <QuestTitle {...args} />;
const AnswerTemplate = (args) => <AnswerBox {...args} />;
const ProgressTemplate = (args) => <ProgressBar {...args} />;

export const 질문텍스트 = TitleTemplate.bind({});
질문텍스트.args = {
   id: 1,
   title: "질문입니다.\n이런상황에서\n당신의 선택은?",
};

export const 답안선택영역 = AnswerTemplate.bind({});
답안선택영역.args = {
   items: [
      { title: "이렇게 한다.", value: "I" },
      { title: "저렇게 한다.", value: "E" },
   ],
   select: () => alert("선택!"),
};

export const 진행상황바 = ProgressTemplate.bind({});
진행상황바.args = {
   id: 8,
   total: 10,
};
