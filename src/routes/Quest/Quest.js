import React, { useEffect, useState } from "react";
import styled from "styled-components";

import QuestTitle from "../../components/Quest/QuestTitle";
import AnswerBox from "../../components/Quest/AnswerBox";
import ProgressBar from "../../components/Quest/ProgressBar";
import { questList } from "../../lib/quest";

const Quest = ({ history }) => {
   const [count, setCount] = useState(0);
   const [goNext, setGoNext] = useState(true);

   useEffect(() => {
      if (goNext) {
         setTimeout(() => {
            setGoNext(false);
         }, 500);
      }
   }, [goNext]);

   const selectAnswer = () => {
      if (count < questList.length - 1) {
         setCount(count + 1);
         setGoNext(true);
      } else {
         history.push("/your_type_is");
      }
   };

   return (
      <View>
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
