import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Task from "./Task";
import { archiveTask, pinTask } from "../../lib/redux";

export const PureTaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
   const events = { onPinTask, onArchiveTask };
   const LoadingRow = (
      <div className="loading-item">
         <span className="glow-checkbox" />
         <span className="glow-text">
            <span>Loading</span> <span>cool</span> <span>state</span>
         </span>
      </div>
   );

   if (loading) {
      return (
         <div className="list-item">
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
         </div>
      );
   }

   if (tasks.length === 0) {
      return (
         <div className="list-items">
            <div className="wrapper-message">
               <span className="icon-check" />
               <div className="title-message">You have no tasks</div>
               <div className="subtitle-message">Sit back and relax</div>
            </div>
         </div>
      );
   }

   const tasksInOrder = [...tasks.filter((t) => t.state === "TASK_PINNED"), ...tasks.filter((t) => t.state !== "TASK_PINNED")];
   return (
      <div className="list-item">
         {tasksInOrder.map((task) => (
            <Task key={task.id} task={task} {...events} />
         ))}
      </div>
   );
};

PureTaskList.propTypes = {
   loading: PropTypes.bool, // check if it's in loading state
   tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired, // the list of tasks
   onPinTask: PropTypes.func, // Event to change the task to pinned
   onArchiveTask: PropTypes.func, // Event to change the task to archived
};

PureTaskList.defaultProps = {
   loading: false,
};

export default connect(
   ({ tasks }) => ({
      tasks: tasks.filter((t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"),
   }),
   (dispatch) => ({
      onArchiveTask: (id) => dispatch(archiveTask(id)),
      onPinTask: (id) => dispatch(pinTask(id)),
   })
)(PureTaskList);
