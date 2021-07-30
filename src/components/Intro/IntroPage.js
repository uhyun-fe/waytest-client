import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const IntroPage = ({ title, desc, img_url, startFunc }) => {
   return (
      <View>
         <h1>{title}</h1>
         <p>{desc}</p>
         <img src={img_url} alt={title} />
         <button onClick={startFunc}>테스트 시작</button>
      </View>
   );
};

const View = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 50px;
   h1 {
      font-size: 2em;
      font-weight: 700;
      line-height: 2;
   }
   p {
      color: #666;
      font-size: 1.1em;
   }
   img {
      margin: 50px 0;
      width: 50%;
   }
   button {
      padding-top: 2px;
      width: 70%;
      height: 60px;
      color: #fff;
      font-size: 1.2em;
      border-radius: 10px;
      background: #874703;
      transition: 0.2s ease-in-out;
      &:hover {
         background: #704000;
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
