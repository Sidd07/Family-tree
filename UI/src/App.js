import React, { Component } from 'react';
import logo from './logo.svg';
import {  Route, Switch } from 'react-router-dom';
import './App.css';

import FamilyTree from './container/familyTree/familyTree';
import FamilyList from './container/familyList/familyList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>          
            <Route path="/" exact component={FamilyList} />  
            <Route path="/family/:id" exact component={FamilyTree} />       
        </Switch>         
      </div>
    );
  }
}

export default App;
