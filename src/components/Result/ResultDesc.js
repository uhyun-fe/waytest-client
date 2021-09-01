import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ResultDesc = ({ type: { name, mbti, img_url, point_wording, good_list, bad_list } }) => {
   return (
      <View>
         <div className="img">
            <img src={img_url} alt={mbti} />
         </div>
         <p>"{point_wording}"</p>
         <div className="desc">
            <span className="title">멋진 {name}!</span>
            <ul>
               {good_list.map((good, i) => (
                  <li key={i}>{good}</li>
               ))}
            </ul>
         </div>
         <div className="desc">
            <span className="title">이런면도 있어요</span>
            <ul>
               {bad_list.map((bad, i) => (
                  <li key={i}>{bad}</li>
               ))}
            </ul>
         </div>
      </View>
   );
};

const View = styled.div`
   margin-bottom: 50px;
   text-align: center;
   .img {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 50px;
      width: 100%;
      min-height: 260px;
      img {
         width: 250px;
      }
   }
   p {
      margin-bottom: 50px;
      padding: 0 1%;
      font-size: 1.2em;
      text-align: center;
   }
   .desc {
      margin-bottom: 30px;
      text-align: left;
      .title {
         padding: 10px 10px 8px;
         margin-bottom: 15px;
         display: inline-block;
         color: #874703;
         font-size: 1.1em;
         font-weight: 700;
         border: 2px solid #874703;
         border-radius: 5px;
      }
      ul {
         padding-left: 5%;
         li {
            margin-bottom: 10px;
            list-style: disc;
            line-height: 1.2;
         }
      }
   }
`;

ResultDesc.propTypes = {
   type: PropTypes.shape({
      name: PropTypes.string.isRequired, // 유형이름
      mbti: PropTypes.string.isRequired, // MBTI
      img_url: PropTypes.string.isRequired, // 유형별 썸네일
      point_wording: PropTypes.string.isRequired, // 대표설명
      good_list: PropTypes.arrayOf(PropTypes.string).isRequired, // 좋은점 설명 리스트
      bad_list: PropTypes.arrayOf(PropTypes.string).isRequired, // 나쁜점 설명 리스트
   }),
};

export default ResultDesc;
