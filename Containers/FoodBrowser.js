import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, ListView } from 'react-native';
import { Switcher, SegmentedControlButton, Input, Button } from 'nachos-ui';
import FoodList from './foodList';
 import styled from 'styled-components/native'


const Container = styled.View`
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

const Footer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`; 

export default class FoodBrowser extends Component {
    static navigationOptions = {
        header: {
            visible: true,
        }
    };

    onItemPress = () => {
        this.props.navigation.navigate('Food')
    }

    render() {
        return (
            <Container>
                <Input placeholder='Buscar' />
                <Switcher direction='row' >
                    <SegmentedControlButton value='Domicilio' text='A Domicilio' />
                    <SegmentedControlButton value='Lugares' text='Lugares' />
                </Switcher>
                <ScrollView>
                    <FoodList onItemPress={this.onItemPress}/>
                    <Footer>
                        <Button>Mapa</Button>
                        <Button>Filtros</Button>
                    </Footer>
                </ScrollView>
            </Container>
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
