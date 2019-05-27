import { Scene, Router, Stack } from 'react-native-router-flux';

import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import React from 'react';

import Login from './screens/Login';
import Register from './screens/RegisterScreen';
import Home from './screens/Home';


// interface Style {
//   titleStyle: TextStyle;
// };

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
      <Scene
          key="register"
          component={Register}
          hideTabBar
          hideNavBar={false}
        />
        <Scene
          key="login"
          component={Login}
          hideTabBar
          hideNavBar={false}
        />
        <Scene
          key="home"
          component={Home}
          hideNavBar={false}
        />
      </Stack>
    </Router>
  );
};
export default RouterComponent;

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'WorkSans-Regular',
  }
});