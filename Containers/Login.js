//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Button, Carousel } from 'nachos-ui';
// create a component
class Login extends Component {

    constructor (props) {
        super(props)
        
    }
    goToBrowser = () => {
        this.props.navigation.navigate('Browse');
        
    }
    render() {
        

        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.linkButtonConteiner} 
                    onPress={this.goToBrowser}>
                    <Text style={styles.linkButton}>Iniciar sesion</Text>
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
                    style={styles.carousel}
                />
                <Button
                    kind='squared'
                    style={styles.faceBookbutton}
                >Continuar con Faceook</Button>
                <Button
                    kind='squared'
                    style={styles.createUserbutton}
                    textStyle={styles.createUserbuttonText}
                >Crear Cuenta</Button>
                <Text style={styles.legal}>Al registrarme, acepto los siguientes términos y
políticas de Foodmatch: Condiciones del servicio,
Política de envíos, Términos y Condiciones de Pago
del servicio, Política de privacidad, Política de
reembolso al comensal y Condiciones de la Garantía al
cocinero.</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    faceBookbutton: {
        backgroundColor: '#627AAD',
        flexDirection: 'column',
        alignSelf: 'stretch',
        margin: 10,
        flex: 2,
    },
    createUserbutton: {
        borderColor: '#627AAD',
        borderWidth: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignSelf: 'stretch',
        margin: 10,
        flex: 2,
    },
    carousel: {
        alignSelf: 'center',
        flexDirection: 'column',
        margin: 6,
        flex: 5,
    },
    createUserbuttonText: {
        color: '#627AAD',
    }
});

//make this component available to the app
export default Login;
