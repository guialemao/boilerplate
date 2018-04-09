import 'SCSS/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Title from './assets/js/Title';
import AddTask from './assets/js/AddTask';
import Listage from './assets/js/Listage';


class ToDo extends React.Component {
  render() {
    return (
      <div>
        <Title title="ToDo List Example" />
        <AddTask />
      </div>
    )
  }
}

ReactDOM.render(<ToDo />, document.getElementById('root'));