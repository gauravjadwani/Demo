import React, { Component } from 'react';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Text,
  Button,
} from 'native-base';
import { connect } from 'react-redux';
import {deleteUserSession} from './../Actions/Login';
import {AsyncStorage} from "react-native";
interface Props {}

class Home extends Component<Props> {
  handlePress=()=>{
    AsyncStorage.clear();
    this.props.deleteUserSession('Gaurav');
  }
  render() {
    console.log('lololo',this.props)
    return (
      <Container>
        <Content>
          <Text>hello {this.props.email}</Text>
          <Button bordered onPress={this.handlePress}>
            <Text>Logout</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const mapStatetoProps = ({
    Login,

}) => {
  console.log('LOGO',Login)
    const {
      email
    } = Login;
    return {
      email
    };
};

export default connect(
    mapStatetoProps,
    {
      deleteUserSession
    }
)(Home);