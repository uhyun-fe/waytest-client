import React, { useEffect, useState } from "react";

import ReactHelmet from "../../components/Others/ReactHelmet";
import IntroLoading from "../../components/Intro/IntroLoading";
import IntroPage from "../../components/Intro/IntroPage";
import { introData } from "../../lib/intro";

import mainImage from "../../assets/images/main.jpg";
import thumb from "../../assets/images/waytest_logo.png";

import { getVisitCount } from "../../lib/api";

const Intro = ({ history }) => {
   const [visit, setVisit] = useState(0);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      getCount();
   });

   async function getCount() {
      try {
         const {
            data: { visit: v },
         } = await getVisitCount();
         setVisit(v);
         setTimeout(() => {
            setLoading(false);
         }, 2000);
      } catch (error) {
         console.error(error);
      }
   }

   const data = {
      title: introData.title,
      desc: introData.desc,
      img_url: mainImage,
      visit_count: visit,
      startFunc: () => history.push("/test"),
   };

   return (
      <>
         <ReactHelmet
            {...{ title: "당신의 커피 유형은?", description: "커피 유형 테스트 시작하기", keywords: "mbti, coffee, test", favicon: thumb }}
         />
         {loading ? <IntroLoading /> : <IntroPage {...data} />}
      </>
   );
};

export default Intro;
