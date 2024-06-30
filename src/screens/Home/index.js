import React, { useState } from "react"
import { Text } from "react-native"
import { 
        ContainerPrincipal,
        FlatListHome, 
        ItemHome, 
        TouchHome 
} from "./styles"

export default function Home () {

    const [itens, setItens] = useState([
        {id: 1, nome: 'Catálogo de Livros - Em estoque'},
        {id: 2, nome: 'Papelaria'},
        {id: 3, nome: 'Resenhas'},
        {id: 4, nome: 'Quem Somos'},
        {id: 5, nome: 'Fale Conosco'},
        {id: 6, nome: 'Trabalhe Conosco'},
    ]);

    const [idSelecionado, setIdSelecionado] = useState(null);

    const renderHome = ({item}) => {

        return (
            <TouchHome
                selecionado = {(item?.id === idSelecionado)}
                onPress={() => setIdSelecionado(item?.id)}
            >

                <ItemHome
                    selecionado = {(item?.id === idSelecionado)}
                >
                    {item?.nome}
                </ItemHome>

            </TouchHome>
        )

    }

    return (

        <ContainerPrincipal>
            
            <FlatListHome
                data={itens}
                renderItem={renderHome}
                keyExtractor={item => item?.id}
            >



            </FlatListHome>

        </ContainerPrincipal>
        

    )

}