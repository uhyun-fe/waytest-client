import React from "react";

import IntroPage from "../../components/Intro/IntroPage";
import sample from "../../assets/images/sample_icon1.png";

const Intro = ({ history }) => {
   const data = {
      title: "테스트 제목",
      desc: "테스트 부제",
      img_url: sample,
      startFunc: () => history.push("/test"),
   };

   return <IntroPage {...data} />;
};

export default Intro;
