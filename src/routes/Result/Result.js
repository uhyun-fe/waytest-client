import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ReactHelmet from "../../components/Others/ReactHelmet";
import Alert from "../../components/Result/Alert";
import ResultTitle from "../../components/Result/ResultTitle";
import ResultDesc from "../../components/Result/ResultDesc";
import ResultChemi from "../../components/Result/ResultChemi";
import ResultLink from "../../components/Result/ResultLink";

import { result_obj } from "../../lib/result";

const Result = ({ match }) => {
   const [mbti] = useState(match.params.type);
   const [isCopied, setIsCopied] = useState(false);
   const [coffee] = useState(result_obj[mbti]);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      if (isCopied) {
         setTimeout(() => {
            setIsCopied(false);
         }, 2000);
      }
   }, [isCopied]);

   // url 복사 버튼 클릭 이벤트
   function copyUrl() {
      navigator.clipboard.writeText(document.URL).then(() => {
         setIsCopied(true);
      });
   }

   // 카카오 공유 버튼 생성
   function shareKaKao() {
      window.Kakao.Link.sendDefault({
         objectType: "feed",
         content: {
            title: coffee.title,
            description: "#커피 #MBTI #유형테스트",
            imageUrl: coffee.img_url,
            link: {
               mobileWebUrl: document.URL,
               webUrl: document.URL,
            },
         },
      });
   }

   return (
      <View>
         <ReactHelmet {...{ title: coffee.title, description: "커피 유형 테스트 결과", keywords: "mbti, coffee, test", favicon: coffee.img_url }} />
         <Alert is_copied={isCopied} />
         <ResultTitle title={coffee.title} />
         <ResultDesc
            type={{
               name: coffee.coffee,
               mbti,
               img_url: coffee.img_url,
               point_wording: coffee.point_wording,
               good_list: coffee.good_list,
               bad_list: coffee.bad_list,
            }}
         />
         <ResultChemi
            {...{
               best: { ...result_obj[coffee.best_chemi], mbti: coffee.best_chemi },
               worst: { ...result_obj[coffee.worst_chemi], mbti: coffee.worst_chemi },
               match,
            }}
         />
         <ResultLink {...{ start_link: "/intro", copyUrl, shareKaKao }} />
      </View>
   );
};

const View = styled.div`
   padding: 5%;
   padding-bottom: 80px;
`;

export default Result;
