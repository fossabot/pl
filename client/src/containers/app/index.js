import React from 'react';
import { Route, Link } from 'react-router-dom';
import Map from '../map';
import Admin from '../admin';

export default () => (
  <div>
    <header>
      APP
      <Link to="/map">map</Link>
      <Link to="/admin">admin</Link>
    </header>
    <main>
      <Route path="/map" component={Map} />
      <Route path="/admin" component={Admin} />
    </main>
  </div>
)
