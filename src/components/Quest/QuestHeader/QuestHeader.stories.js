import React from "react";
import QuestHeader from "./QuestHeader";

export default {
   title: "QuestHeader",
   component: QuestHeader,
};

const Template = (args) => <QuestHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
   count: 1,
   total: 10,
};
