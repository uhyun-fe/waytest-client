import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const QuestTitle = ({ id, title }) => {
   return (
      <View>
         <p>Q{id}</p>
         <h2>
            {title.split("\n").map((t) => (
               <>
                  {t}
                  <br />
               </>
            ))}
         </h2>
      </View>
   );
};

const View = styled.div`
   width: 100%;
   height: 250px;
   p {
      margin-bottom: 50px;
      color: #874703;
      font-size: 2em;
      font-weight: 700;
   }
   h2 {
      font-size: 1.7em;
      font-weight: 700;
      line-height: 1.5;
   }
`;

QuestTitle.propTypes = {
   id: PropTypes.number.isRequired, // 질문 넘버
   title: PropTypes.string.isRequired, // 질문 텍스트
};

export default QuestTitle;
