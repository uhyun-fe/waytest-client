import React from "react";
import PropTypes from "prop-types";

import errorImg from "../../../assets/images/warning.png";
import loadingImg from "../../../assets/images/loading.png";
import QuestHeader from "../QuestHeader/QuestHeader";
import QuestContent from "../QuestContent/QuestContent";
import AnswerButtonList from "../AnswerButton/AnswerButtonList";

const QuestBox = ({ answer, loading, error, quest: { id, text, image_url, items }, total }) => {
   // 로딩 시
   if (loading) {
      return (
         <div className="loading-box">
            <img src={loadingImg} alt="loading" />
            <h3>로딩중...</h3>
         </div>
      );
   }

   // 에러발생 시
   if (error) {
      return (
         <div className="error-box">
            <img src={errorImg} alt="error" />
            <h3>죄송합니다</h3>
            <p>{`"${error}"`}</p>
            <p>테스트를 다시 진행해주세요.</p>
         </div>
      );
   }

   // default
   return (
      <div className="quest-box">
         <QuestHeader count={id} total={total} />
         <QuestContent quest={{ id, text, image_url, items }} />
         <AnswerButtonList quest_id={id} items={items} answer={answer} />
      </div>
   );
};

QuestBox.propTypes = {
   loading: PropTypes.bool, // 로딩
   error: PropTypes.string, // 에러
   quest: PropTypes.shape({
      id: PropTypes.number.isRequired, // 질문 id
      text: PropTypes.string.isRequired, // 질문 text
      image_url: PropTypes.string.isRequired, // 질문 이미지 url
      items: AnswerButtonList.propTypes.items,
   }),
   answer: AnswerButtonList.propTypes.answer, // 답변체크
};

QuestBox.defaultProps = {
   loading: false,
};

export default QuestBox;
