import React from 'react';
import ReactDOM from 'react-dom';

const TaskFilter = (props) => (
  <div className="task-filter">
    <button
      className="btn"
      value="done"
      onClick={props.handleFilter}>
      Done
    </button>
    <button className="btn" value="undone" onClick={props.handleFilter}>Undone</button>
    <button className="btn" value="all" onClick={props.handleFilter}>All</button>
  </div>
);

export default TaskFilter;