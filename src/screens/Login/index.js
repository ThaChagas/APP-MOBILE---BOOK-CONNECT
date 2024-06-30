import React from "react";
import { StyleSheet, View, Text, Alert, ImageBackground, Image } from "react-native"
import MeuInput from "../../components/MeuInput";
import MeuButton from "../../components/MeuButton";


function Login({navigation}){

    const logar = () => {



        navigation.navigate('Home');
    };

    return (
         
        <View style={ styles.boxLogin }>
            <ImageBackground 
            source={require('../../../assets/imagens/imgbg.jpg')} 
            style={{width: '100%', flex: 1, resizeMode: 'cover', alignItems: 'center', justifyContent: 'center'}}
            >

            {/* <Text style={ styles.titulo }>Book Connect</Text> */}

            <Image
                source={require('../../../assets/imagens/titulo.png')}
                style ={{
                    marginTop: 0,
                    height: 250,
                    width: 250,}}
            />

           
        <MeuInput 
            label="E-mail"
            placeHolder="exemplo@exemplo.com"
            comMascara={ false }
        />

        <MeuInput 
            label="Senha"
            placeHolder="123456"
            comMascara={ true }
        />

        <MeuButton
            value="Entrar"
            callback={ logar }
        />

        <Image
            source={require('../../../assets/imagens/logo.png')}
            style ={{
                marginTop: 30,
                resizeMode: 'cover',
                height: 100,
                width: 150,}}
            />


            </ImageBackground>
            

        </View>
    );
}

const styles = StyleSheet.create({
    boxLogin: {
        backgroundColor: '#FAE6D8',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // titulo: {
    //     fontSize: 37,
    //     color: '#e8833a',
    //     fontWeight: 800,
    //     marginBottom: 40
    // }
});

export default Login;