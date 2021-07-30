import React, { useState } from "react";
import styled from "styled-components";

import QuestTitle from "../../components/Quest/QuestTitle";
import ProgressBar from "../../components/Quest/ProgressBar";
import { questList } from "../../lib/quest";

const Quest = ({ history }) => {
   const [count, setCount] = useState(0);

   const selectAnswer = () => {
      if (count < questList.length - 1) setCount(count + 1);
   };

   return (
      <View>
         <TitleListSection>
            <ul style={{ width: questList.length * 100 + "%", left: -100 * count + "%" }}>
               {questList.map(({ id, title }) => (
                  <li>
                     <QuestTitle {...{ id, title }} />
                  </li>
               ))}
            </ul>
         </TitleListSection>
         <button onClick={selectAnswer}>다음</button>
         <ProgressBar {...{ id: count + 1, total: questList.length }} />
      </View>
   );
};

const View = styled.div`
   padding: 5%;
   button {
      width: 100px;
      height: 30px;
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
