import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from '../main';
import Administration from '../administration';
import {getModuleRoutes} from './../../helpers/routes';
import './../styles/app.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: getModuleRoutes('/app')
    };
  }

  render () {
    return (
      <div>
        <main>
          <Switch>
            <Route path="/" component={Main}/>
            <Route path="/administration" component={Administration}/>
            {this.state.routes}
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
