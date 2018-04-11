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

    this.updateNewTask = this.updateNewTask.bind(this)
    this.handleAddNewTask = this.handleAddNewTask.bind(this)
  }

  updateNewTask(e) {
    this.setState({
      newTask: {
        title: e.target.value,
        status: false
      }
    })
  }
  handleAddNewTask() {
    this.props.addNew(this.state.newTask)
    this.setState({
      newTask: {
        title: '',
        status: false
      }
    })
  }


  render() {
    return(
      <div>
        <h3>Add your task</h3>
        <div>
          Title: <input type="text" value={this.state.newTask.title}
          onChange={this.updateNewTask}/> 
        </div>
        <div>
          Status: Do<input id="do" type="checkbox"/>Done<input id="done" type="checkbox"/>
        </div>
        <button onClick={this.handleAddNewTask}>Ok</button>
      </div>
    )
  }
}

export default TaskAdd;