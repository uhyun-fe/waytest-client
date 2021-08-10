import React from "react";

import ReactHelmet from "../../components/Others/ReactHelmet";
import IntroPage from "../../components/Intro/IntroPage";
import { introData } from "../../lib/intro";

import sample from "../../assets/images/sample_icon1.png";
import thumb from "../../assets/images/waytest_logo.png";

const Intro = ({ history }) => {
   const data = {
      title: introData.title,
      desc: introData.desc,
      img_url: sample,
      startFunc: () => history.push("/test"),
   };

   return (
      <>
         <ReactHelmet
            {...{ title: "당신의 커피 유형은?", description: "커피 유형 테스트 시작하기", keywords: "mbti, coffee, test", favicon: thumb }}
         />
         <IntroPage {...data} />
      </>
   );
};

export default Intro;
