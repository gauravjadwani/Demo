import { Reducer } from 'redux';
import { connect } from 'react-redux';
// import {
//   verifyClient,
// } from '../actions/Login';
import React, { Component } from 'react';
import { StyleSheet ,View} from 'react-native';
import {
    Container, Header, Content, Item, Input,
    Icon, Card, CardItem, Text, Button
} from 'native-base';
import {verifyClient} from './../Actions/Login';
interface Props { }

class Login extends Component<Props> {
    state={
        email:'',
        password:''
    }
    handlePress=()=>{
        console.log("pressed",this.state)
        this.props.verifyClient(this.state);
    }
    render() {
        console.log("presdddwsed",this.state.email)
        return (
            <Container>
                <Content padder>
                    <Card style={styles.cardStyle}>
                        <CardItem header style={styles.cardText}>
                            <Text >Login</Text>
                        </CardItem>
                        <CardItem>
                            <Item>
                                <Icon active name='mail' type="Entypo"/>
                                <Input placeholder='Email' value={this.state.email} 
                                onChangeText={email => this.setState({ email })}/>
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Item>
                                <Icon type="Entypo" active name='keyboard' />
                                <Input secureTextEntry={true} placeholder='Password' 
                                onChangeText={password => this.setState({ password })}/>
                                <Icon active name='swap' />
                            </Item>
                        </CardItem>
                        <CardItem>
                            <View style={styles.buttonParent}>
                            <Button bordered onPress={this.handlePress}>
                                <Text>Primary</Text>
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
    cardStyle: {
        marginTop: '50%'
    },
    cardText: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonParent:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStatetoProps = ({
    Login,

  }) => {
    const {

    } = Login;
    // const { details } = ClientDetails;
    // const { loginNotification } = Notification;
    return {
    };
  };
  
  export default connect(
    mapStatetoProps,
    {
      verifyClient,
    }
  )(Login);