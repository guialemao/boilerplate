import React from 'react';
import ReactDOM from 'react-dom';

class AddTask extends React.Component {
  render() {
    return(
      <div>
        Add your task: <input type="text"/> <button>Ok</button>
      </div>
    )
  }
}

export default AddTask;