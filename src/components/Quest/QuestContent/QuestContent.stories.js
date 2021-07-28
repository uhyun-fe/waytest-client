import React from "react";
import QuestContent from "./QuestContent";

export default {
   title: "QuestContent",
   component: QuestContent,
};

const Template = (args) => <QuestContent {...args} />;

export const Default = Template.bind({});
Default.args = {
   quest: {
      id: 1,
      text: "첫번째 질문입니다.",
      image_url: "",
   },
};
