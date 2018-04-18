import React from 'react';
import ReactDOM from 'react-dom';

class Listage extends React.Component {
  render() {
    return(
      <div className="task-listage">
        <h2>Your Tasks</h2>
        <ul className="listage">
          {this.props.item.map((task, id) => <li key={id}><i className="far fa-calendar"></i>{task.title}</li>)}
        </ul>
      </div>
    )
  }
}

export default Listage;