import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Hello from './routes/Hello';
import Horse from './routes/Horse';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* here's a Route */}
          <div>
            <Route exact path="/" component={() => <Hello {...this.state}/>} />
            <Route path="/horse" component={Horse} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
