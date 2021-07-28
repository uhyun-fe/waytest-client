import React from "react";
import PropTypes from "prop-types";

const QuestHeader = ({ count, total }) => {
   return (
      <div className="quest-header">
         <h3>Q{count}.</h3>
         <span>
            {count}/{total}
         </span>
      </div>
   );
};

QuestHeader.propTypes = {
   count: PropTypes.number.isRequired, // 해당 질문 순서
   total: PropTypes.number.isRequired, // 모든 질문 갯수
};

export default QuestHeader;
