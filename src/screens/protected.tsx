import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Text,
  Button,
} from 'native-base';
import { connect } from 'react-redux';
import {verifyClientSession } from './../Actions/Login';
import {AsyncStorage} from "react-native";
import { func } from 'prop-types';
import Login from './Login';
import Home from './Home';
import { Scene, Router, Stack } from 'react-native-router-flux';
interface Props {}


class Protected extends Component<Props> {
    componentWillMount(){
        this.props.verifyClientSession();
    }
  render() {
    console.log('Protected',this.props)
    if(this.props.loggedIn){
        return(<Scene key="home" component={Home} hideNavBar={false} />);
    }else{
        return(<Scene key="login" component={Login} hideNavBar={false} />);
    }
  }
}
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
)(Protected);