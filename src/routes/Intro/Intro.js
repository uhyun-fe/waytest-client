import React from "react";

import ReactHelmet from "../../components/Others/ReactHelmet";
import IntroPage from "../../components/Intro/IntroPage";
import { introData } from "../../lib/intro";

import mainImage from "../../assets/images/main.jpg";
import thumb from "../../assets/images/waytest_logo.png";

const Intro = ({ history }) => {
   const data = {
      title: introData.title,
      desc: introData.desc,
      img_url: mainImage,
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
