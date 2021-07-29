import React from "react";
import PropTypes from "prop-types";

const StartPage = ({ start }) => {
   return (
      <div className="start-page">
         <h1>waytest</h1>
         <button onClick={start}>시작</button>
      </div>
   );
};

StartPage.propTypes = {
   start: PropTypes.func.isRequired, // 시작하기
};

export default StartPage;
