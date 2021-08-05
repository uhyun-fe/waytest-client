import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Alert from "../../components/Result/Alert";
import ResultTitle from "../../components/Result/ResultTitle";
import ResultDesc from "../../components/Result/ResultDesc";
import ResultChemi from "../../components/Result/ResultChemi";
import ResultLink from "../../components/Result/ResultLink";

import sample from "../../assets/images/sample_icon1.png";

const Result = ({ match, history }) => {
   const [mbti] = useState(match.params.type);
   const [isCopied, setIsCopied] = useState(false);

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

   return (
      <View>
         <Helmet
            title={`당신의 유형은 ? 낭만적인 아메리카노 ${mbti}`}
            meta={[
               { property: "og:title", content: `낭만적인 아메리카노 ${mbti}` },
               { property: "og:description", content: `커피 유형 테스트 결과` },
               { property: "og:image", content: { sample } },
            ]}
         />
         <Alert is_copied={isCopied} />
         <ResultTitle title={"낭만적인 아메리카노"} />
         <ResultDesc
            type={{
               name: "아메리카노",
               mbti,
               img_url: sample,
               point_wording: "시간있으면.. 커피 한잔 할래요우워~",
               good_list: [
                  "이렇구요",
                  "저래요",
                  "암튼 멋지죠 시간있으면.. 커피 한잔 할래요우워~ 시간있으면.. 커피 한잔 할래요우워~ 시간있으면.. 커피 한잔 할래요우워~",
               ],
               bad_list: ["이런건 좀 그래요", "저런것도 좀.."],
            }}
         />
         <ResultChemi {...{ best: { name: "무슨무슨 라떼", img_url: sample }, worst: { name: "상냥한 유자차", img_url: sample } }} />
         <ResultLink {...{ start_link: "/intro", copyUrl }} />
      </View>
   );
};

const View = styled.div`
   padding: 5%;
   padding-bottom: 80px;
`;

export default Result;
