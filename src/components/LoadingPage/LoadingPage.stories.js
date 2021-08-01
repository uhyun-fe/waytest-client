import React from "react";
import LoadingPage from "./LoadingPage";

export default {
   title: "로딩페이지",
   component: LoadingPage,
};

const Template = (args) => <LoadingPage {...args} />;

export const Default = Template.bind({});
