import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ReactHelmet from "../../components/Others/ReactHelmet";
import QuestTitle from "../../components/Quest/QuestTitle";
import AnswerBox from "../../components/Quest/AnswerBox";
import ProgressBar from "../../components/Quest/ProgressBar";
import { questList } from "../../lib/quest";

import sample from "../../assets/images/checked.png";

const Quest = ({ history }) => {
   const [answer, setAnswer] = useState([...Array(questList.length)]);
   const [count, setCount] = useState(0);
   const [goNext, setGoNext] = useState(true);

   useEffect(() => {
      if (goNext) {
         setTimeout(() => {
            setGoNext(false);
         }, 100);
      }
   }, [goNext]);

   useEffect(() => {
      if (count >= questList.length - 1 && answer[answer.length - 1] !== undefined)
         history.push({
            pathname: "/loading",
            state: { value: answer.join("") },
         });
   }, [answer]);

   const selectAnswer = (value) => {
      setAnswer(answer.map((a, i) => (i === count ? value : a)));
      if (count < questList.length - 1) {
         setCount(count + 1);
         setGoNext(true);
      }
   };

   return (
      <View>
         <ReactHelmet {...{ title: "당신의 커피 유형은?", description: "커피 유형 테스트 질문", keywords: "mbti, coffee, test", favicon: sample }} />
         <TitleListSection>
            <ul style={{ width: questList.length * 100 + "%", left: -100 * count + "%" }}>
               {questList.map(({ id, title }) => (
                  <li key={id}>
                     <QuestTitle {...{ id, title }} />
                  </li>
               ))}
            </ul>
         </TitleListSection>
         <div className={`answer-box ${goNext ? "go-next" : "default"}`}>
            <AnswerBox items={questList[count].items} select={selectAnswer} />
         </div>
         <ProgressBar {...{ id: count + 1, total: questList.length }} />
      </View>
   );
};

const View = styled.div`
   padding: 5%;
   position: relative;
   overflow: hidden;
   .answer-box {
      position: relative;
      &.go-next {
         left: 120%;
         opacity: 0;
      }
      &.default {
         left: 0;
         opacity: 1;
         transition: 1s ease-in-out;
      }
   }
`;

const TitleListSection = styled.div`
   overflow: hidden;
   ul {
      position: relative;
      display: flex;
      transition: 0.5s ease-in-out;
      li {
         width: 100%;
      }
   }
`;

export default Quest;
