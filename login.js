
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Button, Carousel } from 'nachos-ui';

export default class LogIn extends Component {

  render() {
    const { navigate } = this.props.navigation,
    faceBookbutton = {
        backgroundColor: '#627AAD',
        flexDirection: 'column',
        alignSelf: 'stretch',
        margin: 10,
        flex:2,
    },
    createUserbutton = {
        borderColor: '#627AAD',
        borderWidth: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignSelf: 'stretch',
        margin: 10,
        flex:2,
    },
    carousel= {
        alignSelf: 'center',
        flexDirection: 'column',
        margin: 6,
        flex:5,
    },
    createUserbuttonText= {
        color: '#627AAD',
    };
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.linkButtonConteiner} onPress={()=>navigate('Browse')}>
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
            style={carousel}
        />
        <Button 
            kind='squared'
            style= {faceBookbutton}
        >Continuar con Faceook</Button>
        <Button 
            kind='squared'
            style= {createUserbutton}
            textStyle={createUserbuttonText}
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
const styles = StyleSheet.create({
    container: {
        flex:10,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    linkButtonConteiner: {
        alignSelf: 'flex-end',
    },
    linkButton: {
        fontWeight:'bold',
        color:'#627AAD',
        fontSize:15,
        marginTop:5,
        marginRight:5,
    },
    legal: {
        margin: 10,
        color: '#627AAD',
        flex:1,
    }
});
