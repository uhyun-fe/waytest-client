import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ReactHelmet from "../../components/Others/ReactHelmet";
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
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
      window.Kakao.isInitialized();
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
            title: "당신의 커피 유형은?",
            description: "#커피 #MBTI #유형테스트",
            imageUrl: "https://image.flaticon.com/icons/png/512/3127/3127450.png",
            link: {
               mobileWebUrl: document.URL,
               webUrl: document.URL,
            },
         },
      });
   }

   return (
      <View>
         <ReactHelmet
            {...{ title: `낭만적인 아메리카노 : ${mbti}`, description: "커피 유형 테스트 결과", keywords: "mbti, coffee, test", favicon: sample }}
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
         <ResultLink {...{ start_link: "/intro", copyUrl, shareKaKao }} />
      </View>
   );
};

const View = styled.div`
   padding: 5%;
   padding-bottom: 80px;
`;

export default Result;
