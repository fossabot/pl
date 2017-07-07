import React from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import Map from '../map';
import Admin from '../admin';
import NoMatch from '../no-match';
import './../styles/app.css';

export default () => (
  <div>
    <main>
      <Switch>
        <Redirect exact from="/" to="/map"/>
        <Route path="/map" component={Map}/>
        <Route path="/admin" component={Admin}/>
        <Route component={NoMatch}/>
      </Switch>
    </main>
  </div>
)
