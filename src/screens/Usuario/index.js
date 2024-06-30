import React from "react"
import { Text, Image } from "react-native"
import { Container } from "../../styles/style-geral"
import MeuInput from "../../components/MeuInput"
import MeuButton from "../../components/MeuButton"

export default function Resenhas () {

    const atualizar = () => {

    };

    return (

        <Container>
            <Image
            source={require('../../../assets/imagens/user.png')}
            style ={{
                resizeMode: 'cover',
                height: 200,
                width: 200,}}
            />

            <MeuInput
                label="Nome Completo"
                comMascara={ false } 
                >
            </MeuInput>

            <MeuInput
                label="E-mail"
                comMascara={ false }
            >
            </MeuInput>

            <MeuInput
                label="Senha"
                comMascara={ true }
            >
            </MeuInput>

            <MeuButton
                value="Atualizar"
                callback={ atualizar }
            />

        </Container>
        

    )

}