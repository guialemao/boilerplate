import React from 'react';
import ReactDOM from 'react-dom';

import Listage from './Listage';
import TaskAdd from './TaskAdd';

class TaskContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      tasks: [
        'Ir ao mercado',
        'Levar o Joaquim no pediatra',
        'Ir na fisioterapia'
      ]
    }

    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.setState((state) => ({
      friends: state.tasks.concat([task])
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