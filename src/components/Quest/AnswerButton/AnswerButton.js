import React from "react";
import Proptypes from "prop-types";

const AnswerButton = ({ item: { id, title, value } }) => {
   return <button className="answer-button">{title}</button>;
};

AnswerButton.propTypes = {
   item: Proptypes.shape({
      id: Proptypes.string.isRequired, // 질문별 답변 id
      title: Proptypes.string.isRequired, // 질문별 답변 text
      value: Proptypes.number.isRequired, // 질문별 답변값 (0 or 1)
   }),
};

export default AnswerButton;
