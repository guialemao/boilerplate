import 'SCSS/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

class HelloUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'Guilherme'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (e) {
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>
          Hello {this.state.username}
        </h1>
        Mudar nome: &nbsp;
        <input type="text" value={this.state.username} onChange={this.handleChange}
        />
      </div>
    )
  }
}

ReactDOM.render(<HelloUser />, document.getElementById('root'));
