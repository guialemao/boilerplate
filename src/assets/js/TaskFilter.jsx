import React from 'react';
import ReactDOM from 'react-dom';

class TaskFilter extends React.Component {
  render() {
    return(
      <div className="task-filter">
        <button className="btn">Done</button>
        <button className="btn">Undone</button>
        <button className="btn">All</button>
      </div>
    )
  }
}

export default TaskFilter;