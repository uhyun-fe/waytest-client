import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import GlobalStyles from "./global/styles";
import { Intro, Quest } from "./routes";

function App() {
   return (
      <>
         <GlobalStyles />
         <Router>
            <main>
               <Switch>
                  <Route path="/intro" render={(props) => <Intro {...props} />} />
                  <Route path="/test" render={(props) => <Quest {...props} />} />
                  <Redirect from="*" to="/intro" />
               </Switch>
            </main>
         </Router>
      </>
   );
}

export default App;

// useEffect(() => {
//    if (nowCount > 0) {
//       setIsPassing(true);
//    }
// }, [nowCount]);

// useEffect(() => {
//    if (isPassing) {
//       setTimeout(() => {
//          setIsPassing(false);
//          setNowQuest({ ...nowQuest, quest: data[nowCount] });
//       }, 1000);
//    }
// }, [isPassing]);

// function start() {
//    setAnswer([...Array(10)].map((n, i) => i + 1));
//    setNowQuest({ quest: data[nowCount], total: data.length });
// }

// function setOneAnswer({ id, value }) {
//    setAnswer(answer.map((a, i) => (i === id ? value : a)));
//    setNowCount(nowCount + 1);
// }

/* <ul className="quest-box-ul">
            <li className="quest-box-li">
               <div className={`pass-box ${isPassing ? "display" : "none"}`} />
               {!answer ? <StartPage start={start} /> : <QuestBox answer={setOneAnswer} {...nowQuest} />}
            </li>
         </ul> */
