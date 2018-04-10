import React from 'react';
import ReactDOM from 'react-dom';

class Listage extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        'Ir ao mercado',
        'Levar o Joaquim no pediatra',
        'Ir na fisioterapia'
      ]
    }
  }

  render() {
    return(
      <div>
        <ul>
          {this.state.tasks.map((task, id) => <li key={id}>{task}</li>)}
        </ul>
      </div>
    )
  }
}

export default Listage;