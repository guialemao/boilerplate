import React from 'react';
import ReactDOM from 'react-dom';

class Listage extends React.Component {
  render() {
    return(
      <div>
        <h2>Tasks</h2>
        <ul>
          {this.props.item.map((task, id) => <li key={id}>{task}</li>)}
        </ul>
      </div>
    )
  }
}

export default Listage;