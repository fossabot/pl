import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from '../main';
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
      routes: getModuleRoutes('/app')
    };
  }

  render () {
    return (
      <div>
        <Layout>
          <Header>
            <div className="app-emblem-header">
              <img src={logo} className="app-emblem"/>
            </div>
          </Header>
          <Content>
            <Switch>
              <Route path="/" component={Main}/>
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
