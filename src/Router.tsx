import { Scene, Router, Stack } from 'react-native-router-flux';

import React, { Component } from 'react';

import Login from './screens/Login';
import Register from './screens/RegisterScreen';
import Home from './screens/Home';
import { connect } from 'react-redux';
import {verifyClientSession } from './Actions/Login';

interface Props {}
class RouterComponnet extends Component<Props> {
componentWillMount(){
  this.props.verifyClientSession();
}
   render() {
    return(
      <Router>
      <Stack key="root">
        <Scene key="home" component={(this.props.loggedIn)?(Home):(Login)} hideTabBar hideNavBar={false} />
        <Scene key="login" component={Login} hideTabBar hideNavBar={false} />
        <Scene key="register" component={Register} hideNavBar={false} />
      </Stack>
    </Router>
    )

  }
}

const mapStatetoProps = ({
  Login,

}) => {
  const {
      loggedIn
  } = Login;
  return {
      loggedIn
  };
};

export default connect(
  mapStatetoProps,
  {
      verifyClientSession
  }
)(RouterComponnet);