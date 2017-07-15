import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, ListView} from 'react-native';
import { Switcher, SegmentedControlButton,Input } from 'nachos-ui';
import FoodList from './foodList';

export default class FoodBrowser extends Component {
  static navigationOptions = {
    header: {
      visible: false,
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder='Buscar'
        />
        <Switcher
            direction='row'
        >
            <SegmentedControlButton value='Domicilio' text='A Domicilio' />
            <SegmentedControlButton value='Lugares' text='Lugares' />
        </Switcher>
        <FoodList></FoodList>
        <Button>Mapa</Button>
        <Button>Filtros</Button>
      </View>
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
