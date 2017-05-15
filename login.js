
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Button, Carousel } from 'nachos-ui';

export default class LogIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight>
            <Text>Iniciar sesion</Text>
        </TouchableHighlight>
        <Carousel 
            images={[
                'https://placehold.it/300/311112',
                'https://placehold.it/300/59C480',
                'https://placehold.it/300/546C80',
                'https://placehold.it/300/D58554',
                'https://placehold.it/300/F0CD9B',
                'https://placehold.it/300/311112',
            ]}
        />
        <Button 
            kind='squared'
            textStyle={styles.faceBookbutton}
        >Continuar con Faceook</Button>
        <Button 
            kind='squared'
            textStyle={styles.createUserbutton}
        >Crear Cuenta</Button>
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
