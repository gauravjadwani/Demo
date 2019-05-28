import { Scene, Router, Stack } from 'react-native-router-flux';

import { StyleSheet, TextStyle, ViewStyle, View } from 'react-native';

import React, { Component } from 'react';

import Login from './screens/Login';
import Register from './screens/RegisterScreen';
import Home from './screens/Home';
import Protected from './screens/protected';
import { connect } from 'react-redux';
import {verifyClientSession } from './Actions/Login';
import { getUserSession,getUserSession1} from './utils';

interface Props {}
class Routerr extends Component<Props> {
componentWillMount(){
  this.props.verifyClientSession();
}
   render() {
    console.log('reddddd',this.props.loggedIn);
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
// export default Routerr;
const mapStatetoProps = ({
  Login,

}) => {
  const {
      loggedIn
  } = Login;
  // const { details } = ClientDetails;
  // const { loginNotification } = Notification;
  return {
      loggedIn
  };
};

export default connect(
  mapStatetoProps,
  {
      verifyClientSession
  }
)(Routerr);