import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ResultChemi = ({
   best: { title: b_name, img_url: b_img_url, mbti: b_mbti },
   worst: { title: w_name, img_url: w_img_url, mbti: w_mbti },
   match,
}) => {
   return (
      <View>
         <ul>
            <li>
               <p>같이 마실래?</p>
               <a href={`/${match.path.split("/")[1]}/${b_mbti}`}>
                  <div className="box">
                     <span>{b_name}</span>
                     <div className="img">
                        <img src={b_img_url} alt={b_name} />
                     </div>
                  </div>
               </a>
            </li>
            <li>
               <p>따로 마시자..</p>
               <a href={`/${match.path.split("/")[1]}/${w_mbti}`}>
                  <div className="box">
                     <span>{w_name}</span>
                     <div className="img">
                        <img src={w_img_url} alt={w_name} />
                     </div>
                  </div>
               </a>
            </li>
         </ul>
      </View>
   );
};

const View = styled.div`
   margin-bottom: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
   ul {
      display: flex;
      list-style: none;
      li {
         width: 100%;
         &:first-child {
            margin-right: 10px;
         }
         p {
            margin-bottom: 10px;
            color: #874703;
            font-weight: 700;
         }
         a {
            text-decoration: none;
            .box {
               padding: 20px 10px;
               text-align: center;
               border-radius: 5px;
               box-shadow: 2px 2px 5px #afafaf;
               span {
                  margin-bottom: 20px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 50px;
                  color: #333;
                  font-size: 1.1em;
                  font-weight: 700;
               }
               .img {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 110px;
                  img {
                     width: 80%;
                  }
               }
            }
         }
      }
   }
`;

ResultChemi.propTypes = {
   best: PropTypes.shape({
      title: PropTypes.string.isRequired, // 베스트 타입 타이틀
      img_url: PropTypes.string.isRequired, // 베스트 타입 이미지
   }),
   worst: PropTypes.shape({
      title: PropTypes.string.isRequired, // 워스트 타입 타이틀
      img_url: PropTypes.string.isRequired, // 워스트 타입 이미지
   }),
};

export default ResultChemi;
