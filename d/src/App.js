import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import { Classes } from './components/classes/index.js';

function App() {
  return (
    <Switch>
      <Route path='/' exact />
      <Route path='/classes' component={Classes} />
      {/* <Route path='/monsters' component={Monsters} />
      <Route path='/features' component={Features} />
      <Route path='/spells' component={Spells} /> */}
    </Switch>
  );
}

export default App;
