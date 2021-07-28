import React from "react";
import Proptypes from "prop-types";

const AnswerButton = ({ quest_id, item: { id, title, value }, answer }) => {
   return (
      <button className="answer-button" onClick={() => answer({ id: quest_id, value })}>
         {title}
      </button>
   );
};

AnswerButton.propTypes = {
   quest_id: Proptypes.number.isRequired, // 질문 id
   item: Proptypes.shape({
      id: Proptypes.number.isRequired, // 질문별 답변 id
      title: Proptypes.string.isRequired, // 질문별 답변 text
      value: Proptypes.number.isRequired, // 질문별 답변값 (0 or 1)
   }),
   answer: Proptypes.func.isRequired, // 답변체크
};

export default AnswerButton;
