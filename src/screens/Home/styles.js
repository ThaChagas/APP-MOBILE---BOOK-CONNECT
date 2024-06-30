import styled from "styled-components/native";

const ContainerPrincipal = styled.SafeAreaView`
    flex: 1;
    margin-top: 10px;
`;


const FlatListHome = styled.FlatList`
`;

const ItemHome = styled.Text`
    padding: 25px;
    margin: 10px;
    font-size: 20px;
    color: ${props => props.selecionado ? '#FAE6D8': 'black'};
`;

const TouchHome = styled.TouchableOpacity`
    background-color: ${props => props.selecionado ? '#e8833a': '#788896'};
    margin: 10px;
    text-align: center;
`;

export {
    ContainerPrincipal,
    FlatListHome,
    ItemHome,
    TouchHome
}