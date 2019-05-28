
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import {
    Container, Header, Content, Item, Input,
    Label, Card, CardItem, Text, Button
} from 'native-base';
import { registerClient, openLoginScreen } from './../Actions/Register';

import Toast from 'react-native-easy-toast';
interface Props { }

class Register extends Component<Props> {
    state = {
        email: '',
        password: '',
        confirmPassword: ''
    }
    handlePress = () => {
        console.log("pressed", this.state)
        if(this.state.password === this.state.confirmPassword){
            let {email,password}=this.state;
            this.props.registerClient({email,password});
        }
        // this.refs.toast.show('hello world!');

    }
    render() {
        return (
            <Container>
                <Toast ref="toast" position='top'
                    positionValue={500}
                    fadeInDuration={750}
                    fadeOutDuration={1000} />
                <Content padder>
                    <Card style={styles.cardStyle}>
                        <CardItem header style={styles.cardText}>
                            <Text >Register</Text>
                        </CardItem>
                        <CardItem>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input value={this.state.email}
                                    onChangeText={email => this.setState({ email })} />
                            </Item>

                        </CardItem>
                        <CardItem>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input secureTextEntry={true} value={this.state.password}
                                    onChangeText={password => this.setState({ password })} />
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Item floatingLabel>
                                <Label>Confirm Password</Label>
                                <Input secureTextEntry={true} value={this.state.confirmPassword}
                                    onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                            </Item>
                        </CardItem>
                        <CardItem>
                            <View style={styles.buttonParent}>
                                <Button bordered onPress={this.handlePress}>
                                    <Text>Submit</Text>
                                </Button>
                            </View>
                        </CardItem>
                        <CardItem>
                            <View style={styles.buttonParent}>
                                <Button bordered onPress={this.props.openLoginScreen}>
                                    <Text>Login</Text>
                                </Button>
                            </View>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    cardStyle: {
        marginTop: '50%'
    },
    cardText: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonParent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStatetoProps = ({
    Register,

}) => {
    const {

    } = Register;
    // const { details } = ClientDetails;
    // const { loginNotification } = Notification;
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