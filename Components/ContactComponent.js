import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact'
    }

    render() {
        const title = "Contact Information"
        return (
            <View style={{ margin: 10 }}>
                <Card
                    title={title}
                >
                    <Text style={{ marginBottom: 8 }}>121, Clear Water Bay Road</Text>
                    <Text style={{ marginBottom: 8 }}>Clear Water Bay, Kowloon</Text>
                    <Text style={{ marginBottom: 8 }}>HONG KONG</Text>
                    <Text style={{ marginBottom: 8 }}>Tel: +852 1234 5678</Text>
                    <Text style={{ marginBottom: 8 }}>Fax: +852 8765 4321</Text>
                    <Text style={{ marginBottom: 8 }}>Email:confusion@food.net</Text>
                </Card>

            </View>
        )
    }
}


export default Contact;