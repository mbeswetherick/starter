import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Hello from './routes/Hello';
import Article from './routes/Article';
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
            <Route path="/horse" component={Article} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
