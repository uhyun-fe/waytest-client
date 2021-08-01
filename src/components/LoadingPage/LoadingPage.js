import React from "react";
import styled from "styled-components";

import loading from "../../assets/images/loading.gif";

const LoadingPage = () => {
   return (
      <View>
         <div className="img">
            <img src={loading} alt="loading" />
         </div>
         <h2>유형 분석중...</h2>
      </View>
   );
};

const View = styled.div`
   text-align: center;
   padding-top: 100px;
   .img {
      width: 100%;
      margin-bottom: 30px;
   }
   img {
      width: 200px;
   }
   h2 {
      font-size: 1.5em;
      font-weight: 700;
   }
`;

export default LoadingPage;
