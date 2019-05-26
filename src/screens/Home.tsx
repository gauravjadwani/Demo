
import React, { Component } from 'react';
import { StyleSheet ,View} from 'react-native';
import {
    Container, Header, Content, Item, Input,
    Icon, Card, CardItem, Text, Button
} from 'native-base';

interface Props { }

export default class Home extends Component<Props> {
    render() {
        return (
            <Container>
                <Header />
                <Content padder>
                    <Card style={styles.cardStyle}>
                        <CardItem header style={styles.cardText}>
                            <Text >Home</Text>
                        </CardItem>
                        <CardItem>
                            <Item>
                                <Icon active name='home' />
                                <Input placeholder='Icon Textbox' />
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Item>
                                <Input placeholder='Icon Alignment in Textbox' />
                                <Icon active name='swap' />
                            </Item>
                        </CardItem>
                        <CardItem>
                            <View style={styles.buttonParent}>
                            <Button bordered>
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