import { Scene, Router, Stack } from 'react-native-router-flux';

import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import React from 'react';

import Login from './screens/Login';



// interface Style {
//   titleStyle: TextStyle;
// };

const RouterComponent = () => {
  return (
    <Router titleStyle={styles.titleStyle}>
      <Stack key="root">
        <Scene
          key="splash"
          component={Login}
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