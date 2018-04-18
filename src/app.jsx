import 'SCSS/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Title from 'JS/Title';
import TaskContainer from 'JS/TaskContainer';


class ToDo extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Title title="To-Do List Example" />
          <TaskContainer />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<ToDo />, document.getElementById('root'));