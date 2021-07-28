import React from "react";
import PropTypes from "prop-types";

import AnswerButton from "./AnswerButton";

export const AnswerButtonList = ({ quest_id, items, answer }) => {
   return (
      <div className="answer-button-list">
         {items.map((item) => (
            <AnswerButton key={item.id} quest_id={quest_id} item={item} answer={answer} />
         ))}
      </div>
   );
};

AnswerButtonList.propTypes = {
   quest_id: AnswerButton.propTypes.quest_id, // 질문 id
   items: PropTypes.arrayOf(AnswerButton.propTypes.item).isRequired, // 질문별 답변 정보 배열
   answer: AnswerButton.propTypes.answer, // 답변체크
};

export default AnswerButtonList;
