import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message,
      fetching: props.fetching
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {
    return (
      <div className="App-header">
          <h1>Hello Mcodonalds</h1>
        <p className="App-intro">
          <Link to="/horse">
            {this.state.fetching
              ? 'Fetching message from API'
              : this.state.message}
            </Link>
        </p>
      </div>
    )
  }
}

export default Hello;
