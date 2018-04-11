import React from 'react';
import ReactDOM from 'react-dom';

import Listage from './Listage';
import TaskAdd from './TaskAdd';

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
          status: true
        },
        {
          title: 'Ir na fisioterapia',
          status: true
        }
      ]
    }

    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    console.log(task)
    this.setState((state) => ({
      tasks: [
        ...state.tasks, task
      ]
    }))
  }

  render() {
    return(
      <div>
        <TaskAdd addNew={this.addTask} />
        <Listage item={this.state.tasks} />
      </div>
    )
  }
}

export default TaskContainer;