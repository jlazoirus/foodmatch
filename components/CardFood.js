//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const CardFoodWrapper = styled.TouchableHighlight`
  background: #dfdfdf;
  padding: 20px;
  margin: 5px;
`;

const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10;
`;

const CardNumber = styled.Text`
  color: blue
`;

const CardBody = styled.View`
  height: 150;
  background: #333;
`;

const CardFooter = styled.View`
  padding-top: 20;
  align-items: center;
`;

const FooterTitle = styled.Text`
  font-weight: bold;
  font-size: 18;
  padding-bottom: 10
`;

const FooterSubTitle = styled.Text`
  justify-content: center;
`;
// create a component
class CardFood extends Component {
    constructor (props) {
        super(props)
        
    }
    

    touched = () => {
        this.props.onItemPress();
    }

    render() {
        return (
            <CardFoodWrapper onPress={this.touched}>
                <View>
                    <CardHeader>
                    <Text>Martin Alvares</Text>
                    <CardNumber>8.7</CardNumber>
                </CardHeader>
                <CardBody></CardBody>
                <CardFooter>
                    <FooterTitle>S/12 Chaufa con Cecina</FooterTitle>
                    <Text>Entrega> 1 -3 p.m. | quedan 20</Text>
                </CardFooter>
                </View>
            </CardFoodWrapper>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CardFood;
