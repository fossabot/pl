import React from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import Map from '../map';
import Admin from '../admin';
import NoMatch from '../no-match';

export default () => (
  <div>
    <header>
      APP
      <Link to="/map">map</Link>
      <Link to="/admin">admin</Link>
    </header>
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
