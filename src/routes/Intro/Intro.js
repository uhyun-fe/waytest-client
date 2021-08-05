import React from "react";

import IntroPage from "../../components/Intro/IntroPage";
import sample from "../../assets/images/sample_icon1.png";
import { Helmet } from "react-helmet";

import thumb from "../../assets/images/waytest_logo.png";

const Intro = ({ history }) => {
   const data = {
      title: "테스트 제목",
      desc: "테스트 부제",
      img_url: sample,
      startFunc: () => history.push("/test"),
   };

   return (
      <>
         <Helmet
            title={"당신의 커피 유형은?"}
            meta={[
               { property: "og:title", content: "당신의 커피 유형은?" },
               { property: "og:description", content: `커피 유형 MBTI 테스트` },
               { property: "og:image", content: { thumb } },
            ]}
         />
         <IntroPage {...data} />
      </>
   );
};

export default Intro;
