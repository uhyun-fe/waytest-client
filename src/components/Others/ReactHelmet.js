import React from "react";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ReactHelmet = ({ title, description, keywords, favicon }) => {
   return (
      <>
         <HelmetProvider>
            <Helmet>
               <meta name="description" content={description} />
               <meta name="keywords" content={keywords} />
               <title>{title}</title>
               <meta property="og:title" content={title} />
               <meta property="og:image" content={favicon} />
               <meta property="og:site_name" content="waytest" />
               <meta property="og:description" content={description} />
               <meta property="og:type" content="website" />
            </Helmet>
         </HelmetProvider>
      </>
   );
};

ReactHelmet.propTypes = {
   title: PropTypes.string.isRequired, // 사이트 타이틀
   description: PropTypes.string.isRequired, // 사이트 설명
   keywords: PropTypes.string.isRequired, // 사이트 키워드
   favicon: PropTypes.string.isRequired, // 해당 링크 대표 이미지
};

export default ReactHelmet;
