import React from 'react';
import ReactDOM from 'react-dom';

class TaskAdd extends React.Component {
  constructor() {
    super()

    this.state = {
      newTask: {
        title: '',
        status: false
      }
    }

    this.updateTitle = this.updateTitle.bind(this);
    this.handleAddNewTask = this.handleAddNewTask.bind(this);
  }

  updateStatus() {
    this.setState({
      newTask: {
        ...this.state.newTask,
        status: !this.state.newTask.status
      }
    })
  }
  updateTitle(e) {
    this.setState({
      newTask: {
        title: e.target.value
      }
    })
  }
  handleAddNewTask(e) {
    e.preventDefault();
    this.props.addNew(this.state.newTask)
    this.setState({
      newTask: {
        title: '',
        status: false
      }
    })
  }


  render() {
    return (
      <div className="task-info">
        <h2>Add your task</h2>
        <form>
          <div className="row-form">
          <input type="text" placeholder="Task Title" id="task-title" className="input-txt" value={this.state.newTask.title}
              onChange={this.updateTitle} />
          </div>
          <div className="row-form">
            <label htmlFor="">This task is done?</label>
            <input onChange={() => this.updateStatus()} id="done" type="checkbox" checked={this.state.newTask.status} />Yes
          </div>
          <div className="row-form">
            <button className="btn" onClick={this.handleAddNewTask}>Add</button>
          </div>
        </form>
        
      </div>
    )
  }
}

export default TaskAdd;