import React, { Component } from 'react';
import Menu from './Page/Menu';
import Footer from './Page/Footer';
import { Route, Switch } from 'react-router-dom';
import PageAcc from './Page/PageAcc';
import Artiste from './Artiste/Artiste';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={PageAcc} />
          <Route path="/Artiste" component={Artiste} />
        </Switch>
        <Footer /> 
      </div>
    );
  }
}

export default App;
