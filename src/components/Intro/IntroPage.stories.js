import React from "react";
import IntroPage from "./IntroPage";

import sample from "../../assets/images/sample_icon1.png";

export default {
   title: "인트로페이지",
   component: IntroPage,
};

const Template = (args) => <IntroPage {...args} />;

export const Default = Template.bind({});
Default.args = {
   title: "테스트 제목",
   desc: "테스트 부제",
   img_url: sample,
   startFunc: () => alert("테스트를 시작합니다!"),
};
