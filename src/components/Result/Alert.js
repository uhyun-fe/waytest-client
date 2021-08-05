import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import check from "../../assets/images/checked.png";

const Alert = ({ is_copied }) => {
   return (
      <View className={is_copied ? "display" : "none"}>
         <div className="alert">
            <img src={check} alt="check!" />
            <span>클립보드에 url이 복사되었습니다.</span>
         </div>
      </View>
   );
};

const View = styled.div`
   display: flex;
   justify-content: center;
   position: fixed;
   left: 0;
   padding-top: 10px;
   width: 100%;
   background: #fff;
   transition: 0.5s ease-in-out;
   &.display {
      top: 0;
   }
   &.none {
      top: -70px;
   }
   .alert {
      display: flex;
      align-items: center;
      padding-left: 20px;
      width: 80%;
      max-width: 460px;
      min-width: 280px;
      height: 50px;
      border-radius: 10px;
      background: #fff;
      box-shadow: 2px 2px 8px 1px #e2e2e2;
      img {
         margin-right: 10px;
         width: 30px;
         height: 30px;
      }
      span {
         padding-top: 2px;
         font-size: 0.9em;
      }
   }
`;

Alert.propTypes = {
   is_copied: PropTypes.bool.isRequired, // url 복사 상태
};

export default Alert;
