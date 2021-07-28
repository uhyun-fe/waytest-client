import React from "react";
import PropTypes from "prop-types";

import AnswerButton from "./AnswerButton";

export const AnswerButtonList = ({ items }) => {
   return (
      <div className="answer-button-list">
         {items.map((item) => (
            <AnswerButton key={item.id} item={item} />
         ))}
      </div>
   );
};

AnswerButtonList.propTypes = {
   items: PropTypes.arrayOf(AnswerButton.propTypes.item).isRequired, // 질문별 답변 정보 배열
};

export default AnswerButtonList;
