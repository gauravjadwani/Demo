
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import RouterComponnet from './src/Router';
import configureStore from './src/store/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
// import {createStackNavigator,createAppContainer} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const store = configureStore(applyMiddleware(thunk));
interface Props { }

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
      <RouterComponnet/>
      </Provider>
    );
  }
}
// const AppStackNavigator=createStackNavigator({
//   Login:App
// });
// createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});