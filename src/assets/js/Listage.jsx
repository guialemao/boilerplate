import React from 'react';
import ReactDOM from 'react-dom';

class Listage extends React.Component {
  constructor() {
    super();

    this.state = {
      task: 'Fazer compras'
    }
  }

  render() {
    return(
      <div>
        {this.state.task}
      </div>
    )
  }
}

export default Listage;