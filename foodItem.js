import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, ListView} from 'react-native';
import { Card } from 'nachos-ui';

export default class FootItem extends Component {
  render() {
    return (
      <Card></Card>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#71c671',
        alignItems: 'center',
        justifyContent: 'center',
    },
    faceBookbutton: {
        backgroundColor: '#00008b',
        color: 'white',
    },
    createUserbutton: {
        borderColor: '#00008b',
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    createUserbuttonText: {
        color: 'blue',
    },
    linkButton: {
        color: '#00008b',
        alignSelf: 'flex-end',
    }
});
