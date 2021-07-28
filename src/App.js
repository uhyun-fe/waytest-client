import React, { useEffect, useState } from "react";
import QuestBox from "./components/Quest/QuestBox/QuestBox";

function App() {
   // const todos = [
   //    { id: 1, title: "할일 111", completed: true },
   //    { id: 2, title: "할일 222", completed: false },
   // ];

   const data = [
      {
         id: 1,
         text: "hello",
         image_url: "",
         items: [
            { id: 1, title: "1번 질문", value: 0 },
            { id: 2, title: "2번 질문", value: 1 },
         ],
      },
      {
         id: 2,
         text: "bye",
         image_url: "",
         items: [
            { id: 1, title: "안녕", value: 0 },
            { id: 2, title: "하세여", value: 1 },
         ],
      },
      {
         id: 3,
         text: "re hi",
         image_url: "",
         items: [
            { id: 1, title: "룰루", value: 0 },
            { id: 2, title: "랄라", value: 1 },
         ],
      },
   ];

   const [answer, setAnswer] = useState([]);
   const [nowQuest, setNowQuest] = useState(false);
   const [nowCount, setNowCount] = useState(0);
   const [isPassing, setIsPassing] = useState(false);

   useEffect(() => {
      setAnswer([...Array(10)].map((n, i) => i + 1));
      setNowQuest({ quest: data[nowCount], total: data.length });
   }, []);

   useEffect(() => {
      if (nowCount > 0) {
         setIsPassing(true);
      }
   }, [nowCount]);

   useEffect(() => {
      if (isPassing) {
         setTimeout(() => {
            setIsPassing(false);
            setNowQuest({ ...nowQuest, quest: data[nowCount] });
         }, 1000);
      }
   }, [isPassing]);

   function setOneAnswer({ id, value }) {
      setAnswer(answer.map((a, i) => (i === id ? value : a)));
      setNowCount(nowCount + 1);
   }

   return (
      <div className="App">
         <ul className="quest-box-ul">
            <li className="quest-box-li">
               <div className={`pass-box ${isPassing ? "display" : "none"}`} />
               {nowQuest && <QuestBox answer={setOneAnswer} {...nowQuest} />}
            </li>
         </ul>
         {/* {todos.map((t) => (
            <Todo todo={t} />
         ))} */}
         {/* <Provider store={store}>
            <InboxScreen />
         </Provider> */}
      </div>
   );
}

export default App;
