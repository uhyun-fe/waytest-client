import React from "react";

import QuestBox from "./QuestBox";
import * as QuestContentStories from "../QuestContent/QuestContent.stories";
import * as AnswerButtonListStories from "../AnswerButton/AnswerButtonList.stories";

export default {
   title: "QuestBox",
   component: QuestBox,
};

const Template = (args) => <QuestBox {...args} />;

export const Default = Template.bind({});
Default.args = {
   quest: {
      ...QuestContentStories.Default.args.quest,
      items: AnswerButtonListStories.Default.args.items,
   },
   total: 10,
};

export const Loading = Template.bind({});
Loading.args = {
   ...Default.args,
   loading: true,
};

export const Error = Template.bind({});
Error.args = {
   ...Default.args,
   error: "Error Message",
};
