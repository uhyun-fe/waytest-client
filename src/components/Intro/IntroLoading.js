import React from "react";
import styled from "styled-components";

import loadingImage from "../../assets/images/loading.gif";

const IntroLoading = () => {
   return (
      <Container>
         <img src={loadingImage} alt="loading" />
      </Container>
   );
};

export default IntroLoading;

const Container = styled.div`
   padding: 80px 0;
   img {
      width: 100%;
   }
`;
