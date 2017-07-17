import React, {Component} from 'react';
import {Route, Redirect, Switch, Link} from 'react-router-dom';
import Map from '../map';
import Administration from '../administration';
import {getModuleRoutes} from './../../helpers/routes';
import {Layout} from 'antd';
import './../styles/app.css';
import logo from './logo.png';
const { Header, Content } = Layout;

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: getModuleRoutes('/')
    };
  }

  render () {
    return (
      <div>
        <Layout>
          <Header>
            <div className="app-emblem-header">
              <Link to="/">
                <img src={logo} className="app-emblem" alt="logo"/>
              </Link>
            </div>
          </Header>
          <Content>
            <Switch>
              <Redirect exact path="/" to={{
                pathname: `/map`,
                state: {
                  from: this.props.location
                }
              }}/>
              <Route path="/map" component={Map}/>
              <Route path="/administration" component={Administration}/>
              {this.state.routes}
            </Switch>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App;
