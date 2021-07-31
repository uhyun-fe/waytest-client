import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import GlobalStyles from "./global/styles";
import { Intro, Quest, Result } from "./routes";

function App() {
   return (
      <>
         <GlobalStyles />
         <Router>
            <main>
               <Switch>
                  <Route path="/intro" render={(props) => <Intro {...props} />} />
                  <Route path="/test" render={(props) => <Quest {...props} />} />
                  <Route path="/your_type_is" render={(props) => <Result {...props} />} />
                  <Redirect from="*" to="/intro" />
               </Switch>
            </main>
         </Router>
      </>
   );
}

export default App;
