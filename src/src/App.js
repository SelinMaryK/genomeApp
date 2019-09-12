import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import './App.css';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
