import { Reducer } from 'redux';
import { connect } from 'react-redux';
// import {
//   verifyClient,
// } from '../actions/Login';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Container, Header, Content, Item, Input,
    Icon, Card, CardItem, Text, Button
} from 'native-base';
import { verifyClient ,openRegisterScreen } from './../Actions/Login';
import Toast from 'react-native-easy-toast';
import LinearGradient from 'react-native-linear-gradient';

interface Props { }

class Login extends Component<Props> {
    state = {
        email: '',
        password: ''
    }
    handlePress = () => {
        console.log("pressed", this.state)
        this.props.verifyClient(this.state);

    }
    render() {
        // console.log("presdddwsed", this.props.error);
        // if (this.props.error) {
        //     this.refs.toast.show(this.props.error);
        // }
        return (
            <Container>
                <LinearGradient
                    style={{ backgroundColor: 'black', flex: 1 }}
                    colors={['#e4eef0', '#f7e9d5']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}>
                    <Toast ref="toast" position='top'
                        positionValue={500}
                        fadeInDuration={750}
                        fadeOutDuration={1000} />
                    <Content padder style={styles.contentStyle}>
                        <Card style={styles.cardStyle}>
                            <CardItem header style={styles.cardText}>
                                <Text >Login</Text>
                            </CardItem>
                            <CardItem style={{ backgroundColor: "transparent" }}>
                                <Item>
                                    <Icon active name='mail' type="Entypo" />
                                    <Input placeholder='Email' value={this.state.email}
                                        onChangeText={email => this.setState({ email })} />
                                </Item>
                            </CardItem>
                            <CardItem style={{ backgroundColor: "transparent" }}>
                                <Item>
                                    <Icon type="Entypo" active name='keyboard' />
                                    <Input secureTextEntry={true} placeholder='Password'
                                        onChangeText={password => this.setState({ password })} />
                                    <Icon active name='swap' />
                                </Item>
                            </CardItem>
                            <CardItem style={{ backgroundColor: "transparent" }}>
                                <View style={styles.buttonParent}>
                                    <Button bordered onPress={this.handlePress}>
                                        <Text>Login</Text>
                                    </Button>
                                </View>
                            </CardItem>
                            <CardItem style={{ backgroundColor: "transparent" }}>
                                <View style={styles.buttonParent}>
                                    <Button bordered onPress={this.props.openRegisterScreen}>
                                        <Text>Register</Text>
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
        backgroundColor:"transparent"
    },
    cardText: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"transparent"
    },
    buttonParent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"transparent"
    },
    contentStyle:{
       
    }
});

const mapStatetoProps = ({
    Login,

}) => {
    const {
        error
    } = Login;
    // const { details } = ClientDetails;
    // const { loginNotification } = Notification;
    return {
        error
    };
};

export default connect(
    mapStatetoProps,
    {
        verifyClient,
        openRegisterScreen
    }
)(Login);