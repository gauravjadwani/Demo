import React, { Component } from 'react';
import { connect } from 'react-redux';
import {verifyClientSession } from './../Actions/Login';
import Login from './Login';
import Home from './Home';
import { Scene} from 'react-native-router-flux';
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