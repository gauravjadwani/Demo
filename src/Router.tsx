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
          key="splash"
          component={Login}
          hideTabBar
          hideNavBar={true}
        />
        <Scene
          key="sfssfs"
          component={Register}
          hideTabBar
          hideNavBar={true}
        />
        <Scene
          key="home"
          component={Home}
          hideTabBar
          hideNavBar={true}
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