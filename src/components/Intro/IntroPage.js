import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const IntroPage = ({ title, visit_count, desc, img_url, startFunc }) => {
   return (
      <View>
         <h1>{title}</h1>
         <p>{desc}</p>
         <div className="img">
            <img src={img_url} alt={title} />
         </div>
         <button onClick={startFunc}>테스트 시작</button>
         <p className="visit_count">
            <strong>{visit_count.toLocaleString("ko-KR")}</strong>명이 <br />
            "나와 어울리는 커피"를 알아봤어요!
         </p>
      </View>
   );
};

const View = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 30px 0;
   h1 {
      font-size: 2em;
      font-weight: 700;
      line-height: 2;
   }
   p {
      color: #666;
      font-size: 1.1em;
   }
   .img {
      margin: 50px 0;
      width: 50%;
      min-height: 180px;
      img {
         width: 100%;
      }
   }
   button {
      padding-top: 2px;
      margin-bottom: 50px;
      width: 70%;
      height: 60px;
      color: #fff;
      font-size: 1.2em;
      border: none;
      border-radius: 10px;
      background: #874703;
      transition: 0.2s ease-in-out;
      &:hover {
         background: #704000;
      }
   }
   .visit_count {
      word-break: break-all;
      text-align: center;
      line-height: 1.5;
      strong {
         font-size: 1.5em;
         font-weight: 700;
      }
   }
`;

IntroPage.propTypes = {
   title: PropTypes.string.isRequired, // 테스트 제목
   desc: PropTypes.string.isRequired, // 테스트 부제
   img_url: PropTypes.string.isRequired, // 메인 이미지 url
   startFunc: PropTypes.func.isRequired, // 시작하기 이벤트
};

export default IntroPage;
