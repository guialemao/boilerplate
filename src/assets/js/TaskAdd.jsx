import React from 'react';
import ReactDOM from 'react-dom';

class TaskAdd extends React.Component {
  constructor() {
    super()

    this.state = {
      newTask: ''
    }
  }

  render() {
    return(
      <div>
        Add your task: <input value="massao" type="text"/> <button>Ok</button>
      </div>
    )
  }
}

export default TaskAdd;