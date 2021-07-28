import React from "react";

import AnswerButtonList from "./AnswerButtonList";
import * as AnswerButtonStories from "./AnswerButton.stories";

export default {
   title: "AnswerButtonList",
   component: AnswerButtonList,
};

const Template = (args) => <AnswerButtonList {...args} />;

export const Default = Template.bind({});
Default.args = {
   items: [
      { ...AnswerButtonStories.Default.args.task, id: "1", title: "1번 선택지입니다.", value: 0 },
      { ...AnswerButtonStories.Default.args.task, id: "2", title: "2번 선택지입니다.", value: 1 },
   ],
};
