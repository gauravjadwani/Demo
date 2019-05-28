
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import {
    Container, Content, Item, Input,
    Label, Card, CardItem, Text, Button
} from 'native-base';
import { registerClient, openLoginScreen } from './../Actions/Register';
import LinearGradient from 'react-native-linear-gradient';

import Toast from 'react-native-easy-toast';
interface Props { }

class Register extends Component<Props> {
    state = {
        email: '',
        password: '',
        confirmPassword: ''
    }
    handlePress = () => {
        if(this.state.password === this.state.confirmPassword){
            let {email,password}=this.state;
            this.props.registerClient({email,password});
        }
    }
    render() {
        return (
            <Container>
            <LinearGradient
              style={{ backgroundColor: 'black', flex: 1 }}
              colors={['#e4eef0', '#f7e9d5']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
            >
              <Toast ref="toast" position='top'
                  positionValue={500}
                  fadeInDuration={750}
                  fadeOutDuration={1000} />
              <Content padder>
                  <Card style={styles.cardStyle}>
                      <CardItem header style={styles.cardText}>
                          <Text >Register</Text>
                      </CardItem>
                      <CardItem style={styles.cardItemStyle}>
                          <Item floatingLabel>
                              <Label>Email</Label>
                              <Input value={this.state.email}
                                  onChangeText={email => this.setState({ email })} />
                          </Item>
        
                      </CardItem>
                      <CardItem style={styles.cardItemStyle}>
                          <Item floatingLabel>
                              <Label>Password</Label>
                              <Input secureTextEntry={true} value={this.state.password}
                                  onChangeText={password => this.setState({ password })} />
                          </Item>
                      </CardItem>
                      <CardItem style={styles.cardItemStyle}>
                          <Item floatingLabel>
                              <Label>Confirm Password</Label>
                              <Input secureTextEntry={true} value={this.state.confirmPassword}
                                  onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                          </Item>
                      </CardItem>
                      <CardItem style={styles.cardItemStyle}>
                          <View style={styles.buttonParent}>
                              <Button bordered onPress={this.handlePress}>
                                  <Text>Submit</Text>
                              </Button>
                          </View>
                      </CardItem>
                      <CardItem style={styles.cardItemStyle}>
                          <View style={styles.buttonParent}>
                              <Button bordered onPress={this.props.openLoginScreen}>
                                  <Text>Login</Text>
                              </Button>
                          </View>
                      </CardItem>
                  </Card>
              </Content>
            </LinearGradient>
          </Container>
        );
    }
}
const styles = StyleSheet.create({
    cardStyle: {
        marginTop: '50%',
        backgroundColor: "transparent"
    },
    cardText: {
        justifyContent: 'center',
        alignItems: 'center',
          backgroundColor: "transparent"
    },
    buttonParent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardItemStyle: {
      backgroundColor: "transparent"
    }
});

const mapStatetoProps = ({
    Register,

}) => {
    const {

    } = Register;
    return {
    };
};

export default connect(
    mapStatetoProps,
    {
        registerClient,
        openLoginScreen
    }
)(Register);