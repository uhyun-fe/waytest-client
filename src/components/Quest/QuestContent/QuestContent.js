import React from "react";
import PropTypes from "prop-types";

import sample from "../../../assets/images/sample_icon1.png";

const QuestContent = ({ quest: { id, text, image_url } }) => {
   return (
      <div className="quest-content">
         <p>{text}</p>
         <img src={sample} alt="quest_image" />
      </div>
   );
};

QuestContent.propTypes = {
   quest: PropTypes.shape({
      id: PropTypes.number.isRequired, // 질문 id
      text: PropTypes.string.isRequired, // 질문 텍스트
      image_url: PropTypes.string.isRequired, // 질문 이미지 url
   }),
};

export default QuestContent;
