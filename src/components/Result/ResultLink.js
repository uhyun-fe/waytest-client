import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import kakaoImg from "../../assets/images/kakao.png";
import urlImg from "../../assets/images/url.png";

const ResultLink = ({ start_link, copyUrl }) => {
   return (
      <View>
         <span className="share_title">결과 공유하기</span>
         <div className="icons">
            <button className="kakao">
               <img src={kakaoImg} alt="share with kakaotalk" />
            </button>
            <button className="url" onClick={copyUrl}>
               <img src={urlImg} alt="share with url" />
            </button>
         </div>
         <Link to={start_link}>테스트 다시하기</Link>
      </View>
   );
};

const View = styled.div`
   text-align: center;
   .share_title {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      padding: 5px;
      color: #874703;
      font-size: 1.2em;
      font-weight: 700;
      border-bottom: 1px solid #874703;
   }
   .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      button {
         position: relative;
         width: 50px;
         height: 50px;
         border-radius: 50%;
         background: #eeeeee;
         &:not(:last-child) {
            margin-right: 20px;
         }
         &:hover {
            top: -3px;
         }
         &.kakao {
            background: #ffe812;
            img {
               top: 4px;
            }
         }
         img {
            position: relative;
            top: 3px;
            width: 50%;
            height: 53%;
         }
      }
   }
   > a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 2px;
      height: 60px;
      color: #fff;
      font-size: 1.2em;
      text-decoration: none;
      border-radius: 10px;
      background: #874703;
      transition: 0.2s ease-in-out;
      &:hover {
         background: #704000;
      }
   }
`;

ResultLink.propTypes = {
   start_link: PropTypes.string.isRequired, // 다시하기 경로
};

export default ResultLink;
