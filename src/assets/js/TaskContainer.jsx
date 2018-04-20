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
    this.handleFilter = this.handleFilter.bind(this);
  }

  addTask(task) {
    this.setState((state) => ({
      tasks: [
        ...state.tasks, task
      ]
    }))
  }

  handleFilter(e) {
    const filterValue = e.target.value;
    const initialState = this.state.tasks;
    let result = '';
    switch(filterValue) {
      case 'done':
        result = initialState.filter(e => e.status == true);
        this.setState({
          visibleTasks: result,
        })
        break;
      case 'undone':
        result = initialState.filter(e => e.status == false);
        this.setState({
          visibleTasks: result,
        })
        break;
      default:
        result = initialState.filter(e => e.status != null);
        this.setState({
          visibleTasks: result,
        })
    }
  }

  render() {
    return(
      <div className="card">
        <TaskAdd addNew={this.addTask} />
        <TaskListage item={this.state.visibleTasks} />
        <TaskFilter handleFilter={this.handleFilter} />
      </div>
    )
  }
}

export default TaskContainer;