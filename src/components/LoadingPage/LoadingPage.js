import React from "react";
import styled from "styled-components";

import loading from "../../assets/images/loading.gif";

const LoadingPage = () => {
   return (
      <View>
         <img src={loading} alt="loading" />
         <h2>유형 분석중...</h2>
      </View>
   );
};

const View = styled.div`
   text-align: center;
   padding-top: 100px;
   img {
      width: 200px;
      margin-bottom: 30px;
   }
   h2 {
      font-size: 1.5em;
      font-weight: 700;
   }
`;

export default LoadingPage;
