import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import GlobalStyles from "./global/styles";
import { Intro, Quest, Result, Loading } from "./routes";

function App() {
   useEffect(() => {
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
      window.Kakao.isInitialized();
   }, []);

   return (
      <>
         <GlobalStyles />
         <Router>
            <main>
               <Switch>
                  <Route path="/intro" render={(props) => <Intro {...props} />} />
                  <Route path="/test" render={(props) => <Quest {...props} />} />
                  <Route path="/loading" render={(props) => <Loading {...props} />} />
                  <Route path="/your_type_is/:type" render={(props) => <Result {...props} />} />
                  <Redirect from="*" to="/intro" />
               </Switch>
            </main>
         </Router>
      </>
   );
}

export default App;
