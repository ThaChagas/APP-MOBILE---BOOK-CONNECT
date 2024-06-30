import React, { useState } from "react"
import { Text } from "react-native"
import { 
        ContainerPrincipal,
        FlatListConfig, 
        ItemConfig, 
        TouchConfig 
} from "./styles"

export default function Config () {

    const [setores, setSetores] = useState([
        {id: 1, nome: 'Notificações'},
        {id: 2, nome: 'Privacidade'},
        {id: 3, nome: 'Idioma'},
        {id: 4, nome: 'Central de Ajuda'},
        {id: 5, nome: 'Política do Book Connect'},
        {id: 6, nome: 'Excluir Conta'},
    ]);

    const [idSelecionado, setIdSelecionado] = useState(null);

    const renderConfig = ({item}) => {

        return (
            <TouchConfig
                selecionado = {(item?.id === idSelecionado)}
                onPress={() => setIdSelecionado(item?.id)}
            >

                <ItemConfig
                    selecionado = {(item?.id === idSelecionado)}
                >
                    {item?.nome}
                </ItemConfig>

            </TouchConfig>
        )

    }

    return (

        <ContainerPrincipal>
            
            <FlatListConfig
                data={setores}
                renderItem={renderConfig}
                keyExtractor={item => item?.id}
            >



            </FlatListConfig>

        </ContainerPrincipal>
        

    )

}