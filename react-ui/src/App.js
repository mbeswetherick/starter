import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

const Horse = () => (
  <h1>I am, I aaaam, I am the Horse Seeker</h1>
);

const Hello = ({ state }) => (
  <div className="App-header">
      <h1>Hello Mcodonalds</h1>
    <p className="App-intro">
      {state.fetching
        ? 'Fetching message from API'
        : state.message}
    </p>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
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
      <div className="App">
        <BrowserRouter>
          {/* here's a Route */}
          <div>
            <Route exact path="/" component={() => <Hello state={this.state}/>} />
            <Route path="/horse" component={Horse} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
