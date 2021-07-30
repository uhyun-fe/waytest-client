import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProgressBar = ({ id, total }) => {
   return (
      <View>
         <span className="text">{`${id}/${total}`}</span>
         <div className="bar-box">
            <div class="bar" style={{ width: id * 10 + "%" }} />
         </div>
      </View>
   );
};

const View = styled.div`
   width: 100%;
   .text {
      display: block;
      width: 100%;
      color: #afafaf;
      font-size: 0.9em;
      line-height: 2.5;
      text-align: right;
   }
   .bar-box {
      position: relative;
      width: 100%;
      height: 8px;
      border-radius: 5px;
      background: #f2f2f2;
      .bar {
         position: absolute;
         top: 0;
         left: 0;
         height: 100%;
         border-radius: 5px;
         background: #874703;
         transition: 0.5s ease-in-out;
      }
   }
`;

ProgressBar.propTypes = {
   id: PropTypes.number.isRequired, // 현재 질문 넘버
   total: PropTypes.number.isRequired, // 전체 질문 갯수
};

export default ProgressBar;
