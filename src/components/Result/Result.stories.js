import React from "react";

import ResultTitle from "./ResultTitle";
import ResultDesc from "./ResultDesc";
import ResultChemi from "./ResultChemi";

import sample from "../../assets/images/sample_icon1.png";

export default {
   title: "결과페이지",
};

const TitleTemplate = (args) => <ResultTitle {...args} />;
const DescTemplate = (args) => <ResultDesc {...args} />;
const ChemiTemplate = (args) => <ResultChemi {...args} />;

export const 결과타이틀 = TitleTemplate.bind({});
결과타이틀.args = {
   title: "낭만적인 아메리카노",
};

export const 결과설명 = DescTemplate.bind({});
결과설명.args = {
   type: {
      name: "아메리카노",
      mbti: "INFP",
      img_url: sample,
      point_wording: "커피 한잔 할래요?",
      good_list: ["좋은점 1", "좋은점 2", "좋은점 3"],
      bad_list: ["별로인점 1", "별로인점 2", "별로인점 3"],
   },
};

export const 궁합결과 = ChemiTemplate.bind({});
궁합결과.args = {
   best: {
      name: "라떼는 말이야 카페라떼",
      img_url: sample,
   },
   worst: {
      name: "상냥한 유자차",
      img_url: sample,
   },
};
