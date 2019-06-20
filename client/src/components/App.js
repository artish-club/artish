import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Post from './Post';
import { Nav } from './Nav';
import Main from "./Main";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/post" component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
