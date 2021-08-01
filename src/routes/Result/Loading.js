import React, { useEffect } from "react";

import LoadingPage from "../../components/LoadingPage/LoadingPage";

const Loading = ({ history, location }) => {
   useEffect(() => {
      let list = location.state.value.split("");
      let value = { IE: [], NS: [], FT: [], PJ: [] };
      let key = null;

      list.forEach((it) => {
         if (it === "I" || it === "E") key = "IE";
         else if (it === "N" || it === "S") key = "NS";
         else if (it === "F" || it === "T") key = "FT";
         else if (it === "P" || it === "J") key = "PJ";
         value[key] = value[key].concat(it);
      });

      value = Object.keys(value).map((n) => getMode(value[n]));

      setTimeout(() => {
         history.push(`/your_type_is/${value.join("")}`);
      }, 3000);
   }, []);

   function getMode(arr) {
      let countObj = arr.reduce((a, c) => {
         a[c] = (a[c] || 0) + 1;
         return a;
      }, {});

      let keys = Object.keys(countObj);
      let mode = keys[0];
      keys.forEach((key, i) => {
         if (countObj[key] > countObj[mode]) mode = key;
      });
      return mode;
   }

   return <LoadingPage />;
};

export default Loading;
