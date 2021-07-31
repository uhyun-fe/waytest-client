import React from "react";
import AnswerBox from "./AnswerBox";

export default {
   title: "답안 선택지",
   component: AnswerBox,
};

const Template = (args) => <AnswerBox {...args} />;

export const Default = Template.bind({});
Default.args = {
   items: [
      { title: "이렇게 한다.", value: 0 },
      { title: "저렇게 한다.", value: 1 },
   ],
   select: () => alert("선택!"),
};
