import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ResultTitle = ({ title }) => {
   return (
      <View>
         <p>나의 유형은?</p>
         <h1>{title}</h1>
      </View>
   );
};

const View = styled.div`
   text-align: center;
   p {
      margin-bottom: 20px;
      color: #666;
   }
   h1 {
      font-size: 2em;
      font-weight: 700;
   }
`;
ResultTitle.propTypes = {
   title: PropTypes.string.isRequired, // 테스트 결과 유형 타이틀
};

export default ResultTitle;
