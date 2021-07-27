import { Provider } from "react-redux";

import "./App.css";
import store from "./lib/redux";
import Todo from "./components/Todo";
import InboxScreen from "./components/Task/InboxScreen";

function App() {
   const todos = [
      { id: 1, title: "할일 111", completed: true },
      { id: 2, title: "할일 222", completed: false },
   ];
   return (
      <div className="App">
         {/* {todos.map((t) => (
            <Todo todo={t} />
         ))} */}
         <Provider store={store}>
            <InboxScreen />
         </Provider>
      </div>
   );
}

export default App;
