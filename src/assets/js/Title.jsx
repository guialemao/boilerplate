import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Title;