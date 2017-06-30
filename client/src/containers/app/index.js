import React from 'react'
import { Route } from 'react-router-dom'
import Map from '../map'
// import Admin from '../admin'

export default () => (
  <div>
    <header>
      {/*<Link to="/">map</Link>*/}
      {/*<Link to="/admin">admin</Link>*/}
    </header>
    <main>
      <Route exact path="/" component={Map} />
      {/*<Route exact path="/admin" component={Admin} />*/}
    </main>
  </div>
)
