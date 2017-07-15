import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, ListView} from 'react-native';
import { Button, Carousel, Card, H4 } from 'nachos-ui';
import FoodItem  from '../components/foodItem';
import CardFood from '../components/CardFood.js';

export default class FoodList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }


  
  render() {
    
    return (
      <ScrollView>
        <CardFood onItemPress={this.props.onItemPress} />
        <CardFood onpress={this.onpress} />
    </ScrollView>
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
