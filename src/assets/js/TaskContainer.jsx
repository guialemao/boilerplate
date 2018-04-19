import React from 'react';
import ReactDOM from 'react-dom';

import TaskListage from './TaskListage';
import TaskAdd from './TaskAdd';
import TaskFilter from './TaskFilter';

class TaskContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      tasks: [
        {
          title: 'Ir ao mercado',
          status: true
        },
        {
          title: 'Levar o Joaquim no pediatra',
          status: false
        },
        {
          title: 'Ir na fisioterapia',
          status: true
        }
      ],
      visibleTasks: []
    }

    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.setState((state) => ({
      tasks: [
        ...state.tasks, task
      ]
    }))
  }

  render() {
    return(
      <div className="card">
        <TaskAdd addNew={this.addTask} />
        <TaskListage item={this.state.tasks} />
        <TaskFilter />
      </div>
    )
  }
}

export default TaskContainer;