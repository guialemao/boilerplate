import 'SCSS/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Title from 'JS/Title';
import TaskContainer from 'JS/TaskContainer';


class ToDo extends React.Component {
  render() {
    return (
      <div>
        <Title title="ToDo List Example" />
        <TaskContainer />
      </div>
    )
  }
}

ReactDOM.render(<ToDo />, document.getElementById('root'));